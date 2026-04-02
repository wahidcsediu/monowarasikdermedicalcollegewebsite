import React from 'react';
import { motion } from 'motion/react';
import { User, Tag, ArrowRight } from 'lucide-react';
import { FloatingShapes, TextReveal } from '@/src/components/ui/Common';

export const Blogs = () => {
  const blogs = [
    {
      title: 'The Future of Medical Education in Bangladesh',
      author: 'Prof. Dr. Mohammad Iqbal',
      tag: 'Education',
      date: 'Feb 28, 2026',
      image: 'https://lh3.googleusercontent.com/d/1ikKvNt8qrMg9HWNvd5pIg-QbHHw_SwOX',
      excerpt: 'Exploring how digital transformation and problem-based learning are shaping the next generation of doctors.'
    },
    {
      title: 'Advances in Community-Based Healthcare',
      author: 'Dr. Irin Parven',
      tag: 'Healthcare',
      date: 'Feb 25, 2026',
      image: 'https://lh3.googleusercontent.com/d/1oVTNAwvN7flRn7rmsEifvlZ3xv2XKDQ-',
      excerpt: 'A deep dive into our "Care Beyond Cure" initiative and its impact on rural health outcomes.'
    },
    {
      title: 'Understanding Modern Diagnostic Techniques',
      author: 'Dr. Nazmus Shadad',
      tag: 'Technology',
      date: 'Feb 20, 2026',
      image: 'https://lh3.googleusercontent.com/d/1f84zoqjUAJzdcJhPbJfJpAyZ_jgV063B',
      excerpt: 'How advanced imaging and pathology are revolutionizing early disease detection and treatment planning.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white text-center overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Featured Blogs" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Insights, research, and stories from our faculty and medical experts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center w-full md:w-3/5">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest">
                      {blog.tag}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">{blog.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 mb-8 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
                        <User size={14} className="text-emerald-700" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{blog.author}</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                      <ArrowRight size={20} />
                    </button>
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
