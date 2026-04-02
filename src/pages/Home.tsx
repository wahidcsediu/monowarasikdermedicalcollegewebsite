import React from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { ArrowRight, Users2, Award, Building2, GraduationCap, HeartPulse, Stethoscope, Activity, Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonButton, GlassCard, FloatingShapes, Reveal, Counter, Magnetic, TextReveal, TiltCard, SectionHeader } from '@/src/components/ui/Common';
import { DEPARTMENTS, NEWS, DOCTORS } from '@/src/data/mockData';
import { cn } from '@/src/lib/utils';

export const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-emerald-950">
        {/* Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1N5seH8SvkSUlQ-Xz5dRDfdFLawgYIRqE" 
            alt="Medical Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
        </motion.div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center flex-1 flex flex-col items-center justify-center py-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity }}
              className="space-y-6"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Excellence in Healthcare & Education
              </span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tighter uppercase"
                style={{
                  textShadow: '0 0 30px rgba(52, 211, 153, 0.8), 0 0 60px rgba(52, 211, 153, 0.4), 0 0 100px rgba(52, 211, 153, 0.2)'
                }}
              >
                Monowara Sikder Medical College & Hospital
              </motion.h1>
              <div className="flex flex-wrap justify-center gap-6 pt-12">
                <Magnetic>
                  <Link to="/contact">
                    <NeonButton className="flex items-center space-x-3 px-10 py-5 group shadow-[0_0_60px_rgba(16,185,129,0.4)] border-2 border-emerald-400/30">
                      <span className="uppercase tracking-[0.2em] font-black text-sm">Apply for Admission</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </NeonButton>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/contact">
                    <NeonButton variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-5 backdrop-blur-md shadow-2xl">
                      <span className="uppercase tracking-[0.2em] font-black text-sm">Book Appointment</span>
                    </NeonButton>
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats - In-flow to prevent overlap */}
        <div className="relative z-20 pb-12 hidden lg:block">
          <div className="container-custom">
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: 'Campus Area', value: '509.75', suffix: 'Acres', icon: Building2 },
                { label: 'Hospital Beds', value: '250', suffix: 'Beds', icon: HeartPulse },
                { label: 'Clinical Depts', value: '15', suffix: 'Depts', icon: Users2 },
                { label: 'MBBS Intake', value: '100', suffix: 'Students', icon: GraduationCap },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center space-x-5 p-6 border border-emerald-500/30 bg-black/80 backdrop-blur-xl hover:bg-emerald-950 transition-all duration-500 group rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)] shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                      <stat.icon size={24} />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col leading-none mb-1">
                        <span className="text-2xl font-black text-white tracking-tight">
                          <Counter value={parseFloat(stat.value)} />
                        </span>
                        <span className="text-sm font-bold text-emerald-400 mt-1">{stat.suffix}</span>
                      </div>
                      <div className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-black">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent group-hover:border-emerald-500/70 transition-all duration-500 group-hover:shadow-[0_0_70px_rgba(16,185,129,0.4)]">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1bILtRKyHCMhi1mCvUxozeixi6gBkxEgI" 
                    alt="Ambulance Service" 
                    className="w-full h-full object-contain bg-slate-100 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-600 rounded-3xl p-8 text-white shadow-2xl hidden md:block neon-glow-lg group-hover:scale-105 transition-transform duration-500">
                  <HeartPulse size={48} className="mb-4 opacity-50 animate-pulse" />
                  <h3 className="text-xl font-bold mb-2">24/7 Emergency</h3>
                  <p className="text-sm text-emerald-100">Our emergency services are available round the clock for any medical crisis.</p>
                </div>
              </motion.div>

              <div>
                <SectionHeader 
                  subtitle="About Our Institution" 
                  title="A Legacy of Excellence in Medical Science" 
                />
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Monowara Sikder Medical College & Hospital started its journey from 2015 with the permission of the Ministry of Health and Family Welfare. Situated at Madhupur of Bhedergonj, Shariatpur, our beautifully landscaped terrain provides a pollution-free environment for modern medical education.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {[
                    'Modern Laboratories',
                    'Experienced Faculty',
                    'Clinical Exposure',
                    'Research Opportunities',
                    'Smart Classrooms',
                    'Vibrant Campus Life'
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 group cursor-default">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all">
                        <ArrowRight size={12} />
                      </div>
                      <span className="text-slate-700 font-medium group-hover:text-emerald-600 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <NeonButton variant="outline">Learn More About Us</NeonButton>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeader 
              subtitle="Meet Our Faculty" 
              title="Dedicated Healthcare Professionals" 
            />
            <Link to="/faculty" className="mb-12 text-emerald-600 font-bold hover:underline">
              View All Faculty
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {DOCTORS.slice(0, 3).map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-slate-100 flex items-center justify-center">
                  <img 
                    src={doc.image} 
                    alt="Faculty Member" 
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="section-padding bg-emerald-950 text-white">
        <div className="container-custom">
          <SectionHeader 
            subtitle="Stay Updated" 
            title="Latest News & Campus Events" 
            centered 
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {NEWS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.date}</span>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-emerald-100/60 text-sm mb-6 line-clamp-2">{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="text-emerald-400 font-bold text-sm flex items-center group">
                    Read Full Story
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 flex justify-center items-center gap-6">
            <span className="text-emerald-400/60 text-xs font-bold uppercase tracking-[0.3em]">Follow Our Updates</span>
            <div className="h-px w-12 bg-emerald-500/20" />
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Us Section */}
      <section className="section-padding bg-emerald-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeader 
            subtitle="Academic Excellence" 
            title="Why Study at Monowara Sikder Medical College?" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Global Recognition', desc: 'Affiliated with University of Dhaka and recognized by BM&DC, ensuring your degree is valued worldwide.', icon: Award },
              { title: 'Clinical Exposure', desc: 'Our 250-bed hospital provides hands-on clinical experience from the early years of medical education.', icon: Stethoscope },
              { title: 'Modern Infrastructure', desc: 'State-of-the-art laboratories, digital classrooms, and a vast library with E-library facilities.', icon: Building2 },
              { title: 'Expert Faculty', desc: 'Learn from highly qualified professors and medical specialists with decades of experience.', icon: Users2 },
              { title: 'Research Focus', desc: 'We encourage and support students in clinical research and high-impact medical publications.', icon: Activity },
              { title: 'Vibrant Campus', desc: 'A pollution-free 509-acre campus with separate hostels and extensive co-curricular activities.', icon: GraduationCap },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-emerald-100/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Embedded Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            subtitle="Experience MSMC" 
            title="Virtual Tour & Campus Life" 
            centered 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="MSMC Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <Reveal>
            <SectionHeader 
              subtitle="Our Specializations" 
              title="Our Clinical Departments" 
              centered 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DEPARTMENTS.slice(0, 8).map((dept, i) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/departments/${dept.id}`}>
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/10 transition-colors" />
                      <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all duration-500">
                        <Activity size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-600 transition-colors">{dept.name}</h3>
                      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{dept.description}</p>
                      <div className="flex items-center text-emerald-600 font-bold text-sm">
                        <span>View Details</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/departments">
                <NeonButton>Explore All Clinical Departments</NeonButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-slate-50 overflow-hidden">
        <div className="container-custom">
          <SectionHeader 
            subtitle="Campus Moments" 
            title="Our Photo Gallery" 
            centered 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://lh3.googleusercontent.com/d/1HkAt7ES8pqL_TxLV6F0YMH8KMIJTbTkg',
              'https://lh3.googleusercontent.com/d/1a_JGb0Bhw64pNH-L1K_XZYL9u4QcIYSq',
              'https://lh3.googleusercontent.com/d/1ikKvNt8qrMg9HWNvd5pIg-QbHHw_SwOX',
              'https://lh3.googleusercontent.com/d/1oVTNAwvN7flRn7rmsEifvlZ3xv2XKDQ-',
              'https://lh3.googleusercontent.com/d/1f84zoqjUAJzdcJhPbJfJpAyZ_jgV063B',
              'https://lh3.googleusercontent.com/d/1SDpDB05fESVQmmauWxir7S-gAIY0YynJ',
              'https://lh3.googleusercontent.com/d/1HkAt7ES8pqL_TxLV6F0YMH8KMIJTbTkg',
              'https://lh3.googleusercontent.com/d/1a_JGb0Bhw64pNH-L1K_XZYL9u4QcIYSq',
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <NeonButton variant="outline">View Full Gallery</NeonButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1SDpDB05fESVQmmauWxir7S-gAIY0YynJ" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-emerald-600/80" />
        </div>
        <FloatingShapes />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <TextReveal text="Ready to Start Your Medical Journey?" />
          </h2>
          <p className="text-emerald-50 text-lg mb-12 opacity-90">
            Join Monowara Sikder Medical College & Hospital and become part of a community dedicated to excellence and compassion.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeonButton variant="secondary" className="px-10 py-4 text-lg">
              Apply Online
            </NeonButton>
            <NeonButton variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-4 text-lg">
              Contact Admissions
            </NeonButton>
          </div>
        </div>
      </section>
    </div>
  );
};
