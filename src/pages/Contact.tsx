import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, ArrowRight } from 'lucide-react';
import { NeonButton, GlassCard, FloatingShapes } from '@/src/components/ui/Common';

export const Contact = () => {
  return (
    <div className="pt-20">
      <section className="bg-emerald-950 py-24 md:py-32 text-white text-center relative overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Have questions? We are here to help. Reach out to us for any inquiries regarding admissions, healthcare, or institutional information.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500">
                <h3 className="text-2xl font-bold text-emerald-950 mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">Our Location</h4>
                      <p className="text-slate-600 text-sm mb-2">Madhupur, Bhedergonj, Shariatpur, Bangladesh</p>
                      <a 
                        href="https://maps.app.goo.gl/5wHDtqKSQ3381KNg7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 text-xs font-bold hover:underline flex items-center"
                      >
                        View on Google Maps
                        <ArrowRight size={12} className="ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">College Contact</h4>
                      <p className="text-slate-600 text-sm">+880 1341 778776</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">Hospital Contact</h4>
                      <p className="text-slate-600 text-sm">+880 1746 069727<br />+880 1736 388369</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">Email Address</h4>
                      <p className="text-slate-600 text-sm">msmch.2015@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">Facebook Page</h4>
                      <a href="https://www.facebook.com/msmchbd" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-sm hover:underline font-medium">facebook.com/msmchbd</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">Working Hours</h4>
                      <p className="text-slate-600 text-sm">Wed - Mon: 08:00 AM - 08:00 PM<br />Tuesday: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900 text-white neon-glow-lg border border-emerald-500/50">
                <h3 className="text-xl font-bold mb-6">Emergency Contact</h3>
                <p className="text-slate-400 text-sm mb-6">For immediate medical assistance, please call our 24/7 emergency hotline.</p>
                <div className="text-3xl font-bold text-emerald-400 neon-text">+880 1746 069727</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-10 lg:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-2xl">
                <h3 className="text-3xl font-bold text-emerald-950 mb-4">Send us a Message</h3>
                <p className="text-slate-500 mb-8">You can also reach us via our <a href="https://www.facebook.com/msmchbd" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">Facebook Page</a>.</p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-950">First Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-slate-50/50" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-950">Last Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-slate-50/50" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-950">Email Address</label>
                    <input type="email" className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-slate-50/50" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-950">Subject</label>
                    <select className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-slate-50/50">
                      <option>General Inquiry</option>
                      <option>Admission</option>
                      <option>Appointment</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-emerald-950">Your Message</label>
                    <textarea className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-slate-50/50 h-48" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <NeonButton className="w-full py-5 text-lg flex items-center justify-center space-x-3">
                      <span>Send Message</span>
                      <Send size={20} />
                    </NeonButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="container-custom pb-20">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-[500px] w-full bg-slate-100 relative group overflow-hidden rounded-[3rem] shadow-2xl border border-emerald-100"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Monowara%20Sikder%20Medical%20College%20%26%20Hospital&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Google Map"
            className="relative z-10"
          ></iframe>
          <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none z-20 group-hover:bg-transparent transition-colors duration-500" />
        </motion.section>
      </div>
    </div>
  );
};
