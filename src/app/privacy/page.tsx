import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zealous Digital Solutions",
  description: "Privacy Policy - How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-zinc-500 mb-8">Last updated: March 2026</p>
      
      <div className="prose prose-zinc max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-zinc-600 mb-4">
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 space-y-2">
            <li>Contact information (name, email, phone number)</li>
            <li>Business information when you request our services</li>
            <li>Communication preferences</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
          <p className="text-zinc-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 space-y-2">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries</li>
            <li>Send you marketing communications (with consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="text-zinc-600">
            We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with service providers who assist us in operating our website and conducting our business.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="text-zinc-600">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
          <p className="text-zinc-600">
            You have the right to access, correct, or delete your personal information. Contact us at hello@zealousdigital.com to exercise these rights.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
          <p className="text-zinc-600">
            If you have any questions about this Privacy Policy, please contact us at hello@zealousdigital.com.
          </p>
        </section>
      </div>
    </div>
  );
}
