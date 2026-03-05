import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Zealous Digital Solutions",
  description: "Cookie Policy - Understanding how we use cookies on our website.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="text-zinc-500 mb-8">Last updated: March 2026</p>
      
      <div className="prose prose-zinc max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
          <p className="text-zinc-600">
            Cookies are small text files stored on your device when you visit websites. They help the site function properly and provide analytics to site owners.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
          <p className="text-zinc-600 mb-4">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 text-zinc-600 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
          
          <div className="bg-zinc-50 rounded-xl p-6 mb-4">
            <h3 className="font-bold mb-2">Essential Cookies</h3>
            <p className="text-zinc-600 text-sm">These cookies are necessary for the website to function. They cannot be switched off.</p>
          </div>
          
          <div className="bg-zinc-50 rounded-xl p-6 mb-4">
            <h3 className="font-bold mb-2">Analytics Cookies</h3>
            <p className="text-zinc-600 text-sm">We use anonymized analytics to improve our website. No personal identifying information is collected.</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
          <p className="text-zinc-600">
            You can control or delete cookies through your browser settings. Note that blocking essential cookies may affect website functionality.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
          <p className="text-zinc-600">
            We may update this Cookie Policy periodically. Any changes will be posted on this page.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-zinc-600">
            Questions about our Cookie Policy? Contact us at hello@zealousdigital.com.
          </p>
        </section>
      </div>
    </div>
  );
}
