import React from 'react';
import { motion } from 'motion/react';
import { Activity, Package, Calendar, Hospital, FileDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FloatingShapes, TextReveal, NeonButton } from '@/src/components/ui/Common';

export const ServicesOverview = () => {
  const mainServices = [
    {
      id: 'health-checkup',
      title: 'Health Checkup',
      icon: Activity,
      description: 'Comprehensive health screenings designed for early detection and prevention.',
      features: ['Full Body Screening', 'Cardiac Profile', 'Diabetes Screening', 'Cancer Markers']
    },
    {
      id: 'packages',
      title: 'Health Packages',
      icon: Package,
      description: 'Affordable healthcare bundles tailored for families, seniors, and corporate employees.',
      features: ['Family Wellness', 'Senior Citizen Care', 'Executive Health', 'Pre-Employment']
    },
    {
      id: 'appointment',
      title: 'Doctor Appointment',
      icon: Calendar,
      description: 'Easy online booking system to consult with our world-class medical specialists.',
      features: ['Online Scheduling', 'Specialist Directory', 'Tele-consultation', 'Follow-up Care']
    },
    {
      id: 'hospital-service',
      title: 'Hospital Services',
      icon: Hospital,
      description: '24/7 emergency care, advanced diagnostics, and specialized clinical departments.',
      features: ['Emergency & Trauma', 'ICU & NICU', 'Modular OT', 'Advanced Lab']
    },
    {
      id: 'reports',
      title: 'Downloadable Reports',
      icon: FileDown,
      description: 'Secure access to your medical records and diagnostic reports from anywhere.',
      features: ['Instant Access', 'Secure Storage', 'Digital Archive', 'Easy Sharing']
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white text-center overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Our Services" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Providing a wide range of medical services with a focus on quality, accessibility, and patient care.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-emerald-500 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <NeonButton className="w-full justify-center">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </NeonButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
