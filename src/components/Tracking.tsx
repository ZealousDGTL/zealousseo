"use client";

import Script from "next/script";

export function Tracking() {
    return (
        <>
            {/* Google Tag Manager - Placeholder */}
            <Script id="gtm-script" strategy="afterInteractive">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-XXXXXXX');
                `}
            </Script>

            {/* GoHighLevel V2 Tracking Script */}
            <Script
                src="https://link.msgsndr.com/js/traffic-source.js"
                strategy="lazyOnload"
            />

            {/* Cloudflare Turnstile - Invisible Bot Protection */}
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="lazyOnload"
                async
                defer
            />
        </>
    );
}
