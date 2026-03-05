"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, TrendingUp, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
              Enterprise Digital Performance
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            We Build Your <span className="text-indigo-500">Engine</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            Full-service digital solutions to enhance your online presence. 
            From website design and targeted ads to SEO and conversion optimization.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-medium transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 font-medium transition-colors"
            >
              View Services
            </a>
          </motion.div>
        </div>
        
        {/* Floating UI Elements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-10 top-1/3 hidden lg:block p-4 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-sm font-medium">+247% Traffic</div>
              <div className="text-xs text-zinc-500">Last 30 days</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute right-10 top-1/2 hidden lg:block p-4 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <div className="text-sm font-medium">99.9% Uptime</div>
              <div className="text-xs text-zinc-500">Guaranteed SLA</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-zinc-950">
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
                <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">{stat.number}</div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Zigzag Pattern */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
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
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-indigo-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 p-8">
                    <div className="absolute inset-4 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-indigo-500/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Zealous?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We combine technical expertise with creative innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Data-Driven",
                description: "Every decision backed by analytics and real-world data.",
                icon: TrendingUp,
                colSpan: "md:col-span-2",
              },
              {
                title: "Fast Performance",
                description: "Websites that load in milliseconds, not seconds.",
                icon: Zap,
                colSpan: "",
              },
              {
                title: "Secure by Default",
                description: "Enterprise-grade security for every project.",
                icon: Shield,
                colSpan: "",
              },
              {
                title: "Global Reach",
                description: "Build for audiences anywhere with localization support.",
                icon: Globe,
                colSpan: "md:col-span-3",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${feature.colSpan} group p-8 rounded-3xl bg-black border border-white/10 hover:border-indigo-500/50 transition-colors cursor-pointer`}
              >
                <feature.icon className="w-10 h-10 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-black to-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-indigo-500">Accelerate</span> Your Growth?
            </h2>
            <p className="text-xl text-zinc-400 mb-12">
              Let's build something extraordinary together. Our team is ready to take your digital presence to the next level.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-lg font-medium transition-colors"
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
