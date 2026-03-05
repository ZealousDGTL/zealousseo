"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    
    console.log("Form submitted:", data);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-green-50 border border-green-100 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-4">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-green-600 font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:outline-none transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-zinc-700 mb-2">Company (Optional)</label>
        <input
          type="text"
          id="company"
          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:outline-none transition-colors"
          placeholder="Your company"
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-zinc-700 mb-2">Service Interested In</label>
        <select
          id="service"
          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:outline-none transition-colors"
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
        <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      
      <button
        type="submit"
        className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/25"
      >
        Send Message
      </button>
    </form>
  );
}

export default function ContactPageClient() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Hero */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-zinc-500">
            Ready to take your digital presence to the next level? 
            Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Let's Connect</h2>
              <p className="text-zinc-500 mb-8 text-lg leading-relaxed">
                Whether you're ready to start a project or just want to learn more, 
                we're here to help. Fill out the form or reach out directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <a href="mailto:hello@zealousdigital.co" className="font-semibold text-zinc-900 hover:text-orange-500 transition-colors">
                      hello@zealousdigital.co
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <a href="tel:+16045068036" className="font-semibold text-zinc-900 hover:text-orange-500 transition-colors">
                      +1 (604) 506-8036
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-semibold text-zinc-900">Vancouver, BC, Canada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900">Working Hours</h2>
          <p className="text-zinc-500 mb-8">
            We're available Monday through Friday, 9 AM - 5 PM Pacific Time.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl border border-zinc-100">
              <h3 className="font-semibold text-zinc-900 mb-2">Response Time</h3>
              <p className="text-zinc-500 text-sm">We typically respond within 24 hours.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-zinc-100">
              <h3 className="font-semibold text-zinc-900 mb-2">Free Consultation</h3>
              <p className="text-zinc-500 text-sm">We offer a free 30-minute discovery call.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-zinc-100">
              <h3 className="font-semibold text-zinc-900 mb-2">Flexible</h3>
              <p className="text-zinc-500 text-sm">We work with businesses of all sizes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
