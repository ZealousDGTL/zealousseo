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
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-indigo-500">Services</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Comprehensive digital solutions tailored to your business needs. 
            From strategy to execution, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group p-8 rounded-3xl bg-zinc-950 border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
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
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discover", desc: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Strategy", desc: "We develop a customized plan to achieve your objectives." },
              { step: "03", title: "Execute", desc: "Our team implements the strategy with precision." },
              { step: "04", title: "Optimize", desc: "We continuously monitor and improve for maximum results." },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="text-4xl font-bold text-indigo-500/30">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <a
            href="/contact"
            className="inline-flex px-10 py-5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-lg font-medium transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
