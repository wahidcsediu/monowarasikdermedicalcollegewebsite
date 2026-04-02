import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Award, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { DOCTORS } from '@/src/data/mockData';
import { NeonButton, GlassCard, FloatingShapes, TextReveal } from '@/src/components/ui/Common';

export const Faculty = () => {
  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/d/19T3kq-XSPw0AojqTZSbezd_Hua61Sdf0" 
            alt="Faculty Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Our Faculty" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Meet our team of world-class medical professionals, researchers, and educators dedicated to excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {Object.entries(
              DOCTORS.reduce((acc, doc) => {
                const dept = doc.specialty;
                if (!acc[dept]) acc[dept] = [];
                acc[dept].push(doc);
                return acc;
              }, {} as Record<string, typeof DOCTORS>)
            ).map(([dept, docs], idx) => (
              <motion.div
                key={dept}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-slate-100 pb-12 last:border-0"
              >
                <h2 className="text-3xl font-bold text-emerald-950 mb-8 flex items-center gap-4">
                  <div className="w-2 h-10 bg-emerald-500 rounded-full" />
                  {dept}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {docs.map((doc) => (
                    <Link 
                      key={doc.id} 
                      to={`/faculty/${doc.id}`}
                      className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors mb-2">
                            {doc.name}
                          </h3>
                          <p className="text-emerald-600 text-sm font-bold mb-4">
                            {doc.designation || doc.specialty}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center text-xs text-slate-500">
                              <Award size={14} className="mr-2 text-emerald-500" />
                              <span>{doc.qualification}</span>
                            </div>
                            <div className="flex items-center text-xs text-slate-500">
                              <Clock size={14} className="mr-2 text-emerald-500" />
                              <span>{doc.experience} Experience</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-emerald-600 font-bold text-sm">
                          <span>View Profile</span>
                          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const DoctorProfile = ({ id }: { id?: string }) => {
  const doctor = DOCTORS.find(d => d.id === id) || DOCTORS[0];

  return (
    <div className="pt-20">
      <section className="bg-emerald-950 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 skew-x-12 translate-x-1/4" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <TextReveal text={doctor.name} />
              </h1>
              <p className="text-2xl text-emerald-400 font-bold mb-6 neon-text">{doctor.designation || doctor.specialty}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <GlassCard className="py-3 px-6 flex items-center space-x-3">
                  <Award size={20} className="text-emerald-400" />
                  <span className="text-sm font-medium">{doctor.qualification}</span>
                </GlassCard>
                <GlassCard className="py-3 px-6 flex items-center space-x-3">
                  <Clock size={20} className="text-emerald-400" />
                  <span className="text-sm font-medium">{doctor.experience} Exp.</span>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-6">
                  <TextReveal text="About the Doctor" />
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {doctor.message} With over {doctor.experience} of experience in {doctor.specialty}, {doctor.name} has been a key member of our medical team. He is known for his patient-centric approach and commitment to medical excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-6 flex items-center">
                    <BookOpen size={24} className="mr-3 text-emerald-600" />
                    Specializations
                  </h3>
                  <ul className="space-y-3">
                    {['Advanced Medical Care', 'Clinical Research', 'Medical Education', 'Patient Advocacy'].map(item => (
                      <li key={item} className="flex items-center space-x-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-950 mb-6">Book an Appointment</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white" />
                  <select className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                    <option>Select Date</option>
                    <option>Tomorrow</option>
                    <option>Next Monday</option>
                  </select>
                  <NeonButton className="w-full">Confirm Booking</NeonButton>
                </form>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-xl font-bold text-emerald-950 mb-6">Contact Details</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-emerald-500" />
                    <span>{doctor.id}@msmch.edu.bd</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-emerald-500" />
                    <span>+880 1746 069727</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe size={18} className="text-emerald-500" />
                    <span>www.msmch.run.app</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
