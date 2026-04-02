import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Award, Building2, Users2, HeartPulse, GraduationCap, Library, Globe, Hotel, Microscope, Church, Trophy } from 'lucide-react';
import { GlassCard, TextReveal, SectionHeader } from '@/src/components/ui/Common';

export const About = () => {
  const facilities = [
    { 
      title: 'Academic Resources', 
      desc: 'Spacious, well-furnished library with a vast collection of medical textbooks, journals, and computers. Open 9:00 am to 7:00 pm.',
      icon: Library 
    },
    { 
      title: 'MSMC E-Library', 
      desc: (
        <>
          Digital learning platform via <a href="https://t.me/+hzCMP2eSUMIwOGFl" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold">Telegram channel</a> and online catalogue at <a href="https://msmclibrary.librarika.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold">msmclibrary.librarika.com</a>.
        </>
      ),
      icon: Globe 
    },
    { 
      title: 'Residential Life', 
      desc: 'Two well-furnished separate hostels for male and female students with 24-hour security and Wi-Fi.',
      icon: Hotel 
    },
    { 
      title: 'Specialized Labs', 
      desc: 'Dedicated labs for Anatomy, Physiology, Biochemistry, Pathology, Microbiology, and Pharmacology.',
      icon: Microscope 
    },
    { 
      title: 'Campus Mosque', 
      desc: 'A beautiful mosque on campus for the use of students, teachers, and staff.',
      icon: Church 
    },
    { 
      title: 'Sports & Recreation', 
      desc: 'Indoor and outdoor facilities for cricket, football, and table tennis. Annual cultural nights and tours.',
      icon: Trophy 
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/d/12m3OLisTIuOOPRyAqM-KCnW4-_XMFJHg" 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TextReveal text="About Our Institution" />
          </h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Monowara Sikder Medical College & Hospital: Excellence in medical education and compassionate healthcare since 2015.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emerald-950 mb-6">
                <TextReveal text="Founding & Affiliation" />
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Monowara Sikder Medical College & Hospital was established in 2015 by its founders, Mr. Zainul Haque Sikder and Mrs. Monowara Sikder. The institution officially commenced its academic activities on January 28th, 2016.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The college operates across two primary locations: the main campus is situated in Village-Madhupur, Shariatpur, while the Dhaka office is located within the Z.H. Sikder Women’s Medical College & Hospital complex in Dhanmondi.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Legally, the institution is approved by the Ministry of Health and Family Welfare of the Government of Bangladesh, recognized by the Bangladesh Medical & Dental Council (BM&DC), and is affiliated with the University of Dhaka.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <History size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-950">Established</div>
                    <div className="text-xs text-slate-500">2015</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-950">Recognition</div>
                    <div className="text-xs text-slate-500">BM&DC & Dhaka Univ.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1HkAt7ES8pqL_TxLV6F0YMH8KMIJTbTkg" 
                alt="History" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-emerald-600 font-bold italic">"Nurturing students into highly skilled and ethical doctors."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Land Info Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-24 h-24 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/20">
                <Building2 size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-4">Land & Property Information</h3>
                <p className="text-slate-600 leading-relaxed">
                  The total land area for the property is <strong>509.75 acres</strong>. It is located within the <strong>Kartikpur Mouza</strong>, which serves as the local area. The property is officially registered under <strong>Khatian No. 140</strong>. Geographically, it falls under the <strong>Bhedergonj Upazila</strong> within the <strong>Shariatpur District</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row-reverse gap-16 items-start text-white">
            <div className="w-64 h-64 lg:w-80 lg:h-80 shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
              <img 
                src="https://lh3.googleusercontent.com/d/11CrJd_qnviaO3UsjETJNEbHSJ2oP1V8t" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4 block">Founder of MSMCH</span>
              <h2 className="text-3xl font-bold mb-8">LATE MR. ZAINUL HAQUE SIKDER</h2>
              <div className="space-y-6 text-slate-300 text-base leading-relaxed max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                <p>
                  Late Zainul Haque Sikder was a distinguished entrepreneur, philanthropist, heroic freedom fighter, and visionary leader of Bangladesh. He was the Founder Chairman of Monowara Sikder Medical College and Hospital, established with the noble aim of advancing medical education and providing quality healthcare services to the community.
                </p>
                <p>
                  A man of strong values and deep compassion, he dedicated his life to social welfare and nation-building. His vision was to create an institution that would produce skilled, ethical, and caring medical professionals capable of serving both the country and the global community.
                </p>
                <p>
                  Through his leadership and commitment, Monowara Sikder Medical College stands today as a symbol of excellence, discipline, and humanity. His legacy continues to inspire future generations to work with integrity, dedication, and a spirit of service.
                </p>
                <p className="italic text-emerald-400">
                  May Allah grant him eternal peace and Jannah, and bless us to continue his noble vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairperson's Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-emerald-950 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 items-start text-white">
            <div className="w-64 h-64 lg:w-80 lg:h-80 shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500/30">
              <img 
                src="https://lh3.googleusercontent.com/d/1Zr_GN9VrTdwgt-4ZIYJHUuzj4g2Jgg8p" 
                alt="Chairperson" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4 block">Message From Chairperson</span>
              <h2 className="text-3xl font-bold mb-4">Bismillahir Rahmanir Rahim</h2>
              <p className="text-emerald-200 italic mb-8">In the Name of Allah, the Most Beneficent, the Most Merciful</p>
              <div className="space-y-6 text-emerald-100/80 text-base leading-relaxed max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                <p>
                  At the very begining, I would like to pay my deepest respect and heartfelt remembrance to Late Mr. Zainul Haque Sikder, the Hon’ble Founder Chairman of Monowara Sikder Medical College & Hospital—a visionary leader whose noble ideals continue to guide and inspire us.
                </p>
                <p>
                  Our college is blessed with distinguished faculty members, dedicated staff, and most importantly, our brilliant and promising students. As Chairperson, I feel immense pride and gratitude in witnessing how this institution continues to grow as a beacon of knowledge, service, and humanity.
                </p>
                <p>
                  To our beloved students, I extend my warmest congratulations and heartfelt encouragement. Choosing the noble path of medicine is a calling that demands patience, perseverance, and a passion to serve humanity. At Monowara Sikder Medical College, we strive to nurture in every student the values of empathy, dedication, and ethical excellence.
                </p>
                <p>
                  Looking ahead, I feel a profound sense of optimism and pride. Monowara Sikder Medical College and Hospital will continue to uphold the highest standards of medical education, research, and service to humanity. We aim to produce doctors who not only cure diseases but also bring hope and healing to society.
                </p>
                <p className="font-bold text-emerald-400 pt-4">Allah Hafez.</p>
              </div>
              <div className="mt-10">
                <div className="font-bold text-white text-xl">Mrs. Monowara Sikder</div>
                <div className="text-emerald-400">Chairperson, MSMCH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-emerald-50 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-64 h-64 lg:w-80 lg:h-80 shrink-0 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1_153BbwaX578kXcf469EJN-M-f-F0vZF" 
                alt="Principal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Message From Principal</span>
              <h2 className="text-3xl font-bold text-emerald-950 mb-4">Bismillahir Rahmanir Rahim</h2>
              <p className="text-emerald-600 italic mb-8">In the Name of Allah, the Most Beneficent, the Most Merciful</p>
              <div className="space-y-6 text-slate-600 text-base leading-relaxed max-h-[500px] overflow-y-auto pr-4 custom-scrollbar text-justify">
                <p>
                  It gives me immense pleasure to welcome you all to Monowara Sikder Medical College and Hospital, an institution dedicated to academic excellence, professional integrity, and compassionate healthcare.
                </p>
                <p>
                  Our college was founded with a noble vision — to create a centre of excellence in medical education where knowledge, skill, and humanity blend together to produce competent, ethical, and compassionate doctors.
                </p>
                <p>
                  The medical profession is one of service and sacrifice. At Monowara Sikder Medical College, we are devoted to shaping your journey with the highest standards of education, research, and clinical training.
                </p>
                <p>
                  We are proud of our modern facilities, well-equipped laboratories, enriched library, and advanced hospital setup that offer our students an exceptional learning experience. Our emphasis is not only on academic excellence but also on developing compassion, professionalism, and leadership qualities.
                </p>
                <p className="font-bold text-emerald-600 pt-4">Allah Hafez.</p>
              </div>
              <div className="mt-10">
                <div className="font-bold text-emerald-950 text-xl">Prof. Dr. Afroza Momen</div>
                <div className="text-emerald-600">Principal, Monowara Sikder Medical College & Hospital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Our Achievements</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The institution takes pride in the remarkable results of its students in various Professional MBBS Examinations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="bg-white p-10 border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h4 className="text-xl font-bold text-emerald-950 mb-4">Academic Excellence</h4>
              <p className="text-slate-600 leading-relaxed">
                Consistent high success rates in Professional MBBS Examinations under the University of Dhaka, reflecting our commitment to quality education.
              </p>
            </GlassCard>
            <GlassCard className="bg-white p-10 border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <Users2 size={24} />
              </div>
              <h4 className="text-xl font-bold text-emerald-950 mb-4">Experienced Faculty</h4>
              <p className="text-slate-600 leading-relaxed">
                Our success is attributed to a team of experienced faculty members dedicated to developing students into highly skilled and ethical doctors.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Detailed Facilities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            subtitle="Our Infrastructure" 
            title="Available Facilities" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div key={facility.title}>
                <GlassCard className="p-8 bg-white border-slate-100 hover:border-emerald-500 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <facility.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-3">{facility.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{facility.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
            <h3 className="text-2xl font-bold text-emerald-950 mb-6">Library & Support Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <img 
                src="https://lh3.googleusercontent.com/d/1mmBOw5crRZZZOczhc1_4Nt2aqQjW25U4" 
                alt="Library 1" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://lh3.googleusercontent.com/d/1CU4ar_OW3UaeiUl5YN7P9Gg-Hcyee10d" 
                alt="Library 2" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              A spacious library is available in the academic building, offering a collection of medical textbooks, references, journals, and computer access. It includes separate reading areas for students and teachers and operates from <strong>9:00 am to 7:00 pm</strong> on working days, though it is closed on <strong>Tuesdays</strong> and national holidays.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Monowara Sikder Medical College (MSMC) Library provides access to internationally recognized medical and health science journals through the WHO-supported <strong>HINARI (Health Inter Network Access to Research Initiative)</strong> platform. It enables users to access resources from renowned publishers such as Elsevier, Springer Nature, Wiley-Blackwell, Taylor & Francis, Oxford University Press, Cambridge University Press, BMJ Publishing Group, Wolters Kluwer, SAGE Publications, Karger Publishers, Thieme Medical Publishers, American Medical Association, American College of Physicians, American Society for Microbiology, Royal Society of Medicine Press, PLOS, and BioMed Central.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              In addition, our <strong>MSMC E-Library</strong> is accessible via our <a href="https://t.me/+hzCMP2eSUMIwOGFl" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold">Telegram channel</a> and <a href="https://msmclibrary.librarika.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold">online catalogue</a>.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The college is staffed by a team of experienced and energetic faculty members and clinicians who supervise students to help them acquire the skills needed to become competent doctors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
