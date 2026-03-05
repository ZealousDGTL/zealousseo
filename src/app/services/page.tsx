import type { Metadata } from "next";
import { Search, PenTool, TrendingUp, Mail, Smartphone, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Zealous Digital Solutions",
  description: "Explore our comprehensive digital marketing services including SEO, web design, PPC advertising, and more.",
};

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Dominate search results with data-driven SEO strategies that drive organic traffic and conversions.",
    features: [
      "Technical SEO Audit & Fixes",
      "On-Page Optimization",
      "Content Strategy & Creation",
      "Link Building Campaigns",
      "Local SEO",
      "SEO Reporting & Analytics",
    ],
  },
  {
    icon: PenTool,
    title: "Web Design & Development",
    description: "Custom websites that engage visitors and drive conversions with modern, responsive design.",
    features: [
      "Custom Website Design",
      "WordPress Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Website Maintenance",
      "Performance Optimization",
    ],
  },
  {
    icon: TrendingUp,
    title: "PPC Advertising",
    description: "Maximize your ROI with targeted campaigns on Google, Meta, and other advertising platforms.",
    features: [
      "Google Ads Management",
      "Meta (Facebook/Instagram) Ads",
      "Retargeting Campaigns",
      "Ad Copywriting",
      "A/B Testing",
      "Conversion Tracking",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with automated email campaigns that deliver results.",
    features: [
      "Email Strategy",
      "Campaign Setup",
      "Automation Workflows",
      "A/B Testing",
      "List Management",
      "Performance Reports",
    ],
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Build your brand and engage with your audience on the platforms that matter most.",
    features: [
      "Content Strategy",
      "Platform Management",
      "Community Engagement",
      "Influencer Marketing",
      "Social Analytics",
      "Paid Social Campaigns",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and actionable insights.",
    features: [
      "Google Analytics Setup",
      "Custom Dashboards",
      "Goal Tracking",
      "User Behavior Analysis",
      "ROI Reporting",
      "Competitor Analysis",
    ],
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Search Engine Optimization" },
      { "@type": "ListItem", position: 2, name: "Web Design & Development" },
      { "@type": "ListItem", position: 3, name: "PPC Advertising" },
      { "@type": "ListItem", position: 4, name: "Email Marketing" },
      { "@type": "ListItem", position: 5, name: "Social Media Marketing" },
      { "@type": "ListItem", position: 6, name: "Analytics & Reporting" },
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
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-zinc-500">
            Comprehensive digital solutions tailored to your business needs. 
            From strategy to execution, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-500 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-zinc-900">Our Process</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discover", desc: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Strategy", desc: "We develop a customized plan to achieve your objectives." },
              { step: "03", title: "Execute", desc: "Our team implements the strategy with precision." },
              { step: "04", title: "Optimize", desc: "We continuously monitor and improve for maximum results." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="text-4xl font-bold text-orange-500/30">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-zinc-900">Ready to Get Started?</h2>
          <p className="text-xl text-zinc-500 mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <a
            href="/contact"
            className="inline-flex px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full transition-all shadow-lg shadow-orange-500/25"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
