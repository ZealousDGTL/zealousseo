const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://zealousseo.com';
const OUT_DIR = path.join(__dirname, 'out', 'screenshots');

if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
}

const viewports = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 }
];

async function extract() {
    console.log('Launching browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log(`Navigating to ${BASE_URL}...`);
    // Use domcontentloaded for faster link extraction, don't necessarily wait for full network idle
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

    console.log('Extracting links for sitemap...');
    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a'))
            .map(a => a.href)
            .filter(href => href.startsWith(window.location.origin) && !href.includes('#'));
    });

    const uniqueLinks = [...new Set(links)];
    const sitemapPath = path.join(__dirname, 'site_map.json');
    fs.writeFileSync(sitemapPath, JSON.stringify({ pages: uniqueLinks }, null, 2));
    console.log(`Saved sitemap with ${uniqueLinks.length} links to ${sitemapPath}`);

    // We'll screenshot the Home page and maybe two other major pages.
    const pagesToScreenshot = [BASE_URL];
    const servicePages = uniqueLinks.filter(link => link.toLowerCase().includes('service') && link !== BASE_URL);
    if (servicePages.length > 0) pagesToScreenshot.push(servicePages[0]);

    const otherPages = uniqueLinks.filter(link => !link.toLowerCase().includes('service') && link !== BASE_URL);
    if (otherPages.length > 0) pagesToScreenshot.push(otherPages[0]);

    for (const targetUrl of pagesToScreenshot) {
        const pageName = targetUrl === BASE_URL ? 'home' : targetUrl.split('/').filter(Boolean).pop() || 'page';
        console.log(`Processing screenshots for ${targetUrl}...`);

        for (const vp of viewports) {
            console.log(`  - Capturing ${vp.name}...`);
            const vpContext = await browser.newContext({
                viewport: { width: vp.width, height: vp.height }
            });
            const vpPage = await vpContext.newPage();
            try {
                await vpPage.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
                await vpPage.waitForTimeout(3000); // Allow lazy loaded images and animations to trigger

                const safeName = pageName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                const screenshotPath = path.join(OUT_DIR, `${safeName}_${vp.name}.png`);
                await vpPage.screenshot({ path: screenshotPath, fullPage: true });
            } catch (e) {
                console.error(`Failed to capture ${targetUrl} on ${vp.name}:`, e.message);
            }
            await vpContext.close();
        }
    }

    await browser.close();
    console.log('Extraction complete!');
}

extract().catch(console.error);
