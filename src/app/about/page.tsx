import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zealous Digital Solutions",
  description: "Learn about Zealous Digital - your partner in enterprise digital performance. We combine technical expertise with creative innovation.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zealous Digital Solutions",
    description: "Full-service digital solutions to enhance your online presence.",
    foundingDate: "2016",
    url: "https://zealousseo.com",
    logo: "https://zealousseo.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-604-506-8036",
      contactType: "customer service",
      email: "hello@zealousdigital.co",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    sameAs: [
      "https://github.com/ZealousDGTL",
      "https://linkedin.com/company/zealousdigital",
      "https://twitter.com/zealousdigital",
    ],
  };

  return (
    <div className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6">
            About <span className="text-orange-500">Zealous</span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            We&apos;re a team of digital strategists, designers, and engineers dedicated to 
            helping businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-zinc-600 max-w-none">
            <p>
              Founded in 2016, Zealous Digital Solutions has grown from a small SEO agency to a full-service 
              digital partner. We believe in the power of data-driven strategies combined with creative innovation.
            </p>
            <p>
              Our approach is simple: understand your business, identify opportunities, and execute with precision. 
              Every project we undertake is a partnership, and your success is our success.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-zinc-900">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "Users", title: "Client-First", desc: "Your success is our priority" },
              { icon: "Award", title: "Excellence", desc: "We settle for nothing less" },
              { icon: "Heart", title: "Passion", desc: "We love what we do" },
              { icon: "Globe", title: "Impact", desc: "Results that matter" },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-white rounded-2xl border border-zinc-100">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center">
                  <span className="text-orange-500 font-bold">{value.icon[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{value.title}</h3>
                <p className="text-zinc-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-zinc-900">Experience & Expertise</h2>
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Experience</h3>
              <p className="text-zinc-600 leading-relaxed">
                With over 10 years in the digital marketing industry, our team has helped 
                hundreds of businesses achieve their online goals. From startups to enterprise 
                organizations, we&apos;ve seen it all and delivered results across every sector.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Expertise</h3>
              <p className="text-zinc-600 leading-relaxed">
                Our team consists of certified professionals in Google Ads, Meta Business, 
                and more. We stay ahead of industry trends to ensure our clients 
                always get the latest and most effective strategies.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Authoritativeness</h3>
              <p className="text-zinc-600 leading-relaxed">
                Recognized by industry leaders and trusted by businesses worldwide. Our work 
                speaks for itself, with case studies showcasing transformations across multiple industries.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Trustworthiness</h3>
              <p className="text-zinc-600 leading-relaxed">
                Transparent reporting, honest recommendations, and ethical practices. We 
                build long-term relationships based on trust and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
