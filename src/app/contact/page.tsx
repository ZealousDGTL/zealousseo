import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Zealous Digital Solutions",
  description: "Get in touch with Zealous Digital Solutions. Let's discuss your digital marketing needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-indigo-500">Touch</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Ready to take your digital presence to the next level? 
            Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              <p className="text-zinc-400 mb-8">
                Whether you're ready to start a project or just want to learn more, 
                we're here to help. Fill out the form or reach out directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <a href="mailto:hello@zealousdigital.co" className="font-medium hover:text-indigo-400 transition-colors">
                      hello@zealousdigital.co
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <a href="tel:+16045068036" className="font-medium hover:text-indigo-400 transition-colors">
                      +1 (604) 506-8036
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Vancouver, BC, Canada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">Search Engine Optimization</option>
                    <option value="webdesign">Web Design & Development</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Additional Info */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Working Hours</h2>
          <p className="text-zinc-400 mb-8">
            We're available Monday through Friday, 9 AM - 5 PM Pacific Time.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-zinc-400 text-sm">We typically respond within 24 hours.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-zinc-400 text-sm">We offer a free 30-minute discovery call.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <h3 className="font-semibold mb-2">Flexible</h3>
              <p className="text-zinc-400 text-sm">We work with businesses of all sizes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
