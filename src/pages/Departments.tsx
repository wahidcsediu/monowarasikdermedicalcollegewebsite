import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Microscope, Stethoscope, HeartPulse, Bone, Baby, Scissors, Scan, FlaskConical, PersonStanding, Eye, Ambulance, Bed } from 'lucide-react';
import { DEPARTMENTS } from '@/src/data/mockData';
import { NeonButton, TextReveal } from '@/src/components/ui/Common';

const iconMap: Record<string, any> = {
  Bone, Activity, FlaskConical, Stethoscope, Scissors, Baby, HeartPulse, Heart: HeartPulse, PersonStanding, Scan, Microscope, Eye, Ambulance
};

export const Departments = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-emerald-950 py-24 md:py-32 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Our Departments" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Explore our wide range of specialized medical departments, each equipped with modern technology and expert staff.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept, i) => {
              const Icon = iconMap[dept.icon] || Activity;
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <Link to={`/departments/${dept.id}`}>
                    <div className="h-full p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-950 mb-4">{dept.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(dept as any).beds && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100">
                            <Bed size={14} className="mr-2" />
                            {(dept as any).beds} Beds
                          </div>
                        )}
                        {(dept as any).wards && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
                            <Activity size={14} className="mr-2" />
                            {(dept as any).wards} Wards
                          </div>
                        )}
                      </div>
                      <p className="text-slate-500 mb-8 leading-relaxed">
                        {dept.description} Our {dept.name} department provides comprehensive care and advanced diagnostic services.
                      </p>
                      <div className="flex items-center text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">
                        <span>Explore Department</span>
                        <ArrowRight size={20} className="ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export const DepartmentDetail = ({ id }: { id?: string }) => {
  // In a real app, we'd use useParams() and find the dept
  // For now, let's just show a generic detail page
  return (
    <div className="pt-20">
       <section className="bg-emerald-950 py-24 md:py-32 text-white">
        <div className="container-custom">
          <Link to="/departments" className="text-emerald-400 font-bold mb-8 inline-flex items-center hover:underline">
            <ArrowRight size={16} className="rotate-180 mr-2" />
            Back to All Departments
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
            <TextReveal text={id?.replace('-', ' ') || 'Department Details'} />
          </h1>
          <p className="text-emerald-100/60 max-w-3xl text-lg leading-relaxed">
            Our department is committed to providing the highest standard of medical care and education. We utilize state-of-the-art diagnostic and therapeutic technologies to ensure the best outcomes for our patients.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-6">
                  <TextReveal text="Overview" />
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  The department offers a wide range of services including outpatient consultations, inpatient care, and specialized procedures. Our team of highly qualified doctors and support staff work together to provide personalized care to each patient.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-6">
                  <TextReveal text="Services Offered" />
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Specialized Consultations',
                    'Advanced Diagnostic Imaging',
                    'Minimally Invasive Procedures',
                    'Post-Operative Care',
                    'Emergency Services',
                    'Rehabilitation Programs'
                  ].map(service => (
                    <li key={service} className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-slate-700 font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-950 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <NeonButton className="w-full">Book Appointment</NeonButton>
                  <p className="text-center text-sm text-slate-500">Or call us at</p>
                  <p className="text-center font-bold text-emerald-600 text-xl">+880 1746 069727</p>
                </div>
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-6">Department Hours</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon - Fri</span>
                    <span className="text-emerald-400">08:00 AM - 08:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday</span>
                    <span className="text-emerald-400">09:00 AM - 05:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400">Emergency Only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
