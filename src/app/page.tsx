"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, TrendingUp, Zap, Shield, Globe, } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zealous Digital Solutions",
    url: "https://zealousseo.com",
    description: "Full-service digital solutions to enhance your online presence.",
    publisher: {
      "@type": "Organization",
      name: "Zealous Digital Solutions",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://zealousseo.com/services",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section - White Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(#f4f4f5_1px,transparent_1px),linear-gradient(90deg,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 text-sm font-medium rounded-full mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                ESTD 2016
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                We Build Your
                <br />
                <span className="text-orange-500">Digital Engine</span>
              </h1>
              
              <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-lg">
                Full-service digital solutions to enhance your online presence. 
                From website design and targeted ads to SEO and conversion optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-orange-500/25"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-200 hover:border-zinc-300 text-zinc-700 font-semibold rounded-full transition-colors"
                >
                  View Services
                </a>
              </div>
            </motion.div>
            
            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square relative">
                {/* Abstract shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl" />
                <div className="absolute top-8 right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-8 left-8 w-48 h-48 bg-zinc-100 rounded-full blur-3xl" />
                
                {/* Floating cards */}
                <div className="absolute top-1/4 left-0 p-6 bg-white rounded-2xl shadow-xl border border-zinc-100 max-w-[200px]">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900">+247%</div>
                  <div className="text-sm text-zinc-500">Traffic Growth</div>
                </div>
                
                <div className="absolute bottom-1/4 right-0 p-6 bg-white rounded-2xl shadow-xl border border-zinc-100 max-w-[180px]">
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-zinc-700" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900">99.9%</div>
                  <div className="text-sm text-zinc-500">Uptime SLA</div>
                </div>
                
                {/* Fingerprint icon large */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg viewBox="0 0 120 120" className="w-40 h-40 opacity-20">
                    <path 
                      d="M60 10C32.4 10 10 32.4 10 60s22.4 50 50 50 50-22.4 50-50S87.6 10 60 10zm0 80c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30z" 
                      fill="#FF5500"
                    />
                    <path 
                      d="M60 25c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35zm0 55c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" 
                      fill="#FF5500"
                    />
                    <path 
                      d="M60 40c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z" 
                      fill="#FF5500"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean White */}
      <section className="py-20 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Years Experience" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">{stat.number}</div>
                <div className="text-zinc-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Zigzag Pattern */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Our Services</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                icon: Search,
                title: "Search Engine Optimization",
                description: "Dominate search results with data-driven SEO strategies. We optimize your website to rank higher and drive organic traffic that converts.",
                features: ["Technical SEO Audit", "On-Page Optimization", "Link Building", "Content Strategy"],
              },
              {
                icon: PenTool,
                title: "Web Design & Development",
                description: "Custom websites that engage visitors and drive conversions. Modern, responsive, and optimized for performance from day one.",
                features: ["Custom Design", "Responsive Layout", "CMS Integration", "E-commerce Solutions"],
              },
              {
                icon: TrendingUp,
                title: "PPC Advertising",
                description: "Maximize your ROI with targeted campaigns on Google, Meta, and other platforms. Every dollar optimized for maximum impact.",
                features: ["Google Ads", "Meta Ads", "Retargeting", "A/B Testing"],
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                  <p className="text-zinc-500 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-zinc-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-200 p-8">
                    <div className="absolute inset-8 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-orange-500/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid - 4 Columns */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Why Choose Zealous?</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
              We combine technical expertise with creative innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Data-Driven", desc: "Every decision backed by analytics and real-world data." },
              { icon: Zap, title: "Fast Performance", desc: "Websites that load in milliseconds, not seconds." },
              { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade security for every project." },
              { icon: Globe, title: "Global Reach", desc: "Build for audiences anywhere with localization." },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer group"
              >
                <feature.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-zinc-900 to-zinc-900" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-orange-500">Accelerate</span> Your Growth?
            </h2>
            <p className="text-xl text-zinc-400 mb-12">
              Let's build something extraordinary together. Our team is ready to take your digital presence to the next level.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-lg font-semibold rounded-full transition-all shadow-lg shadow-orange-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
