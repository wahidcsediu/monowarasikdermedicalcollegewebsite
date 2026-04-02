import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Trophy, Medal } from 'lucide-react';
import { FloatingShapes, TextReveal } from '@/src/components/ui/Common';

export const Awards = () => {
  const awards = [
    {
      year: '2025',
      title: 'Best Medical College in the Region',
      issuer: 'National Health Council',
      icon: Trophy,
      description: 'Recognized for outstanding academic performance and state-of-the-art clinical facilities.'
    },
    {
      year: '2024',
      title: 'Excellence in Community Health',
      issuer: 'Ministry of Health',
      icon: Medal,
      description: 'Awarded for our extensive outreach programs and "Care Beyond Cure" initiative.'
    },
    {
      year: '2023',
      title: 'Innovation in Medical Education',
      issuer: 'BM&DC',
      icon: Star,
      description: 'For implementing Problem Based Learning (PBL) and advanced digital learning platforms.'
    },
    {
      year: '2022',
      title: 'Top Research Institution',
      issuer: 'University of Dhaka',
      icon: Award,
      description: 'For significant contributions to clinical research and high-impact publications.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white text-center overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Awards & Achievements" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Celebrating our journey of excellence in medical education and healthcare services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <award.icon size={32} />
                  </div>
                  <div>
                    <span className="text-emerald-600 font-bold text-sm mb-2 block">{award.year}</span>
                    <h3 className="text-2xl font-bold text-emerald-950 mb-3">{award.title}</h3>
                    <p className="text-slate-500 font-medium mb-4">{award.issuer}</p>
                    <p className="text-slate-600 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
