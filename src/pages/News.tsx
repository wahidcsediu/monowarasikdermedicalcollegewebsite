import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NEWS } from '@/src/data/mockData';
import { FloatingShapes, TextReveal } from '@/src/components/ui/Common';

export const News = () => {
  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white text-center overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Latest News" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Stay updated with the latest happenings at Monowara Sikder Medical College.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold mb-4">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
