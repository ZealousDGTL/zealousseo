import type { Metadata } from "next";
import { Users, Award, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Zealous Digital Solutions",
  description: "Learn about Zealous Digital - your partner in enterprise digital performance. We combine technical expertise with creative innovation.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-indigo-500">Zealous</span>
          </h1>
          <p className="text-xl text-zinc-400">
            We're a team of digital strategists, designers, and engineers dedicated to 
            helping businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Our Story</h2>
            <p>
              Founded with a mission to help businesses succeed online, Zealous Digital Solutions 
              has grown from a small SEO agency to a full-service digital partner. We believe 
              in the power of data-driven strategies combined with creative innovation.
            </p>
            <p>
              Our approach is simple: understand your business, identify opportunities, and 
              execute with precision. Every project we undertake is a partnership, and your 
              success is our success.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Client-First", desc: "Your success is our priority" },
              { icon: Award, title: "Excellence", desc: "We settle for nothing less" },
              { icon: Heart, title: "Passion", desc: "We love what we do" },
              { icon: Globe, title: "Impact", desc: "Results that matter" },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 rounded-3xl bg-black border border-white/10">
                <value.icon className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-zinc-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Experience & Expertise</h2>
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <p className="text-zinc-400">
                With over 10 years in the digital marketing industry, our team has helped 
                hundreds of businesses achieve their online goals. From startups to enterprise 
                organizations, we've seen it all and delivered results across every sector.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
              <p className="text-zinc-400">
                Our team consists of certified professionals in Google Ads, Meta Business, 
                HubSpot, and more. We stay ahead of industry trends to ensure our clients 
                always get the latest and most effective strategies.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Authoritativeness</h3>
              <p className="text-zinc-400">
                Recognized by industry leaders and trusted by businesses worldwide. Our work 
                speaks for itself, with case studies showcasing transformations across multiple 
                industries.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Trustworthiness</h3>
              <p className="text-zinc-400">
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
