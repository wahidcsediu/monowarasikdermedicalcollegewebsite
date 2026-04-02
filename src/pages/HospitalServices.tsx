import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Activity, Ambulance, Microscope, ClipboardList, CalendarCheck, Scissors, Eye, Users, Scan, Stethoscope, Baby, Heart, PersonStanding } from 'lucide-react';
import { NeonButton, GlassCard, FloatingShapes, Reveal, TextReveal } from '@/src/components/ui/Common';
import { DEPARTMENTS } from '@/src/data/mockData';

export const HospitalServices = () => {
  const services = [
    {
      title: '24-Hours Emergency',
      description: 'Round-the-clock trauma care and emergency medical services with expert response in our dedicated Casualty department.',
      icon: HeartPulse,
      color: 'bg-red-50 text-red-600'
    },
    {
      title: '24-Hours Ambulance',
      description: 'Fully equipped ICU ambulances available 24/7 for rapid patient transport to and from our 250-bed facility.',
      icon: Ambulance,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Diagnostic Services',
      description: 'Advanced Pathology and Radiology & Imaging labs available 24/7 for accurate medical reports and diagnostics.',
      icon: Microscope,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Specialized Clinics',
      description: 'Consultations in Cardiology, Paediatrics, ENT, and more available during OPD hours.',
      icon: CalendarCheck,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Surgical Excellence',
      description: 'Modern operation theatres for General Surgery, Orthopaedics, and Gynaecology & Obstetrics.',
      icon: Activity,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Dental & Maxillo-Facial',
      description: 'Comprehensive dental care and advanced maxillo-facial surgery services.',
      icon: ClipboardList,
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-emerald-950 py-24 md:py-32 text-white text-center relative overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Hospital Services" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            A 250-bed teaching hospital dedicated to providing cost-effective medical services and specialized care to the community.
          </p>
        </div>
      </section>

      {/* About Hospital */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1GuopAxLoR4Ah9gkHprOAM_Kkd-B5nmEH" 
                alt="Hospital Building" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">250+</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">Hospital Beds</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-emerald-950 mb-6">Teaching Hospital</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The Monowara Sikder Medical College Hospital is a 250-bed teaching hospital. It is dedicated to providing cost-effective medical services and specialized care to the community.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The hospital serves as a vital clinical training ground for students, ensuring they gain hands-on experience in a real-world healthcare setting under the supervision of experienced clinicians.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-emerald-50 text-emerald-700 rounded-full font-bold text-sm">Clinical Training</div>
                <div className="px-6 py-3 bg-emerald-50 text-emerald-700 rounded-full font-bold text-sm">Specialized Care</div>
                <div className="px-6 py-3 bg-emerald-50 text-emerald-700 rounded-full font-bold text-sm">24/7 Emergency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bed Arrangement Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Bed Arrangement</h2>
            <p className="text-slate-600">Detailed distribution of beds across various clinical departments.</p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Serial No</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Department</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Ward/Unit</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">No. of Beds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { s: 1, d: 'Medicine', w: '02', b: 60 },
                  { s: 2, d: 'Surgery', w: '02', b: 60 },
                  { s: 3, d: 'Gynaecology', w: '01', b: 30 },
                  { s: 4, d: 'Obstetrics', w: '01', b: 30 },
                  { s: 5, d: 'Ophthalmology', w: '01', b: 5 },
                  { s: 6, d: 'ENT', w: '01', b: 10 },
                  { s: 7, d: 'Paediatrics', w: '01', b: 20 },
                  { s: 8, d: 'Orthopedics', w: '01', b: 15 },
                  { s: 9, d: 'Cardiology', w: '01', b: 10 },
                  { s: 10, d: 'Dermatology', w: '01', b: 5 },
                  { s: 11, d: 'Casualty', w: '01', b: 5 },
                ].map((row, i) => (
                  <tr key={row.s} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-6 text-slate-600 font-mono">{row.s.toString().padStart(2, '0')}</td>
                    <td className="p-6 text-emerald-950 font-bold">{row.d}</td>
                    <td className="p-6 text-slate-600">{row.w}</td>
                    <td className="p-6 text-emerald-600 font-bold">{row.b}</td>
                  </tr>
                ))}
                <tr className="bg-emerald-50 font-bold">
                  <td colSpan={3} className="p-6 text-emerald-950 text-right uppercase tracking-widest">Total Capacity</td>
                  <td className="p-6 text-emerald-600 text-xl">250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Our Departments</h2>
            <p className="text-slate-600">Specialized clinical and academic services across all major medical disciplines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-[2rem] border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">{dept.name}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {dept.description}
                </p>
                {dept.beds && (
                  <div className="flex gap-4 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                    <span>{dept.beds} Beds</span>
                    <span>{dept.wards} Wards</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-emerald-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all duration-500 group h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/10 transition-colors" />
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-500`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <NeonButton variant="outline" className="w-full">Learn More</NeonButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Appointment Form UI */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-emerald-600 p-12 lg:p-20 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <TextReveal text="Book an Appointment" />
              </h2>
              <p className="text-emerald-50 mb-12 opacity-80 text-lg">
                Fill out the form to schedule a consultation with one of our specialists. We will confirm your appointment via email or phone.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Ambulance size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-200 uppercase tracking-widest">Emergency</p>
                    <p className="text-xl font-bold">+880 1746 069727</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <CalendarCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-200 uppercase tracking-widest">OPD Hours</p>
                    <p className="text-xl font-bold">09:00 AM - 05:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-emerald-950">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-emerald-950">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="+880..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-emerald-950">Department</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                    <option>Select Department</option>
                    {DEPARTMENTS.map(d => <option key={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-emerald-950">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-emerald-950">Message (Optional)</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none h-32" placeholder="Briefly describe your symptoms..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <NeonButton className="w-full py-4 text-lg">Request Appointment</NeonButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
