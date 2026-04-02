import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { FloatingShapes, TextReveal } from '@/src/components/ui/Common';

export const Events = () => {
  const events = [
    {
      title: 'Annual Sports Tournament 2026',
      date: 'March 15, 2026',
      time: '09:00 AM',
      location: 'College Sports Complex',
      description: 'A week-long celebration of sportsmanship and athletic excellence involving all batches.'
    },
    {
      title: 'International Medical Seminar',
      date: 'April 05, 2026',
      time: '10:00 AM',
      location: 'Main Auditorium',
      description: 'Guest speakers from renowned international institutions sharing insights on modern clinical practices.'
    },
    {
      title: 'Free Health Camp - Madhupur',
      date: 'April 20, 2026',
      time: '08:00 AM',
      location: 'Community Health Center',
      description: 'Providing free consultations and basic medicines to the local community as part of our outreach program.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white text-center overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="Upcoming Events" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Join us in our academic, cultural, and community activities throughout the year.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="space-y-8">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-48 h-48 rounded-3xl bg-emerald-50 flex flex-col items-center justify-center text-emerald-600 border border-emerald-100 flex-shrink-0">
                  <span className="text-4xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                  <span className="text-sm font-bold uppercase tracking-widest">{event.date.split(' ')[0]}</span>
                  <span className="text-xs mt-2">{event.date.split(' ')[2]}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-emerald-950 mb-4">{event.title}</h3>
                  <p className="text-slate-600 mb-6">{event.description}</p>
                  <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-emerald-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-emerald-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-colors whitespace-nowrap">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
