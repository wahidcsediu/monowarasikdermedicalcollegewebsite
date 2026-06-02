import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BookOpen, UserCheck, FileText, CheckCircle2, ArrowRight, Activity, Calendar, Clock, Info, Layers, Table, ChevronRight } from 'lucide-react';
import { NeonButton, GlassCard, FloatingShapes, TextReveal } from '@/src/components/ui/Common';
import { DEPARTMENTS } from '@/src/data/mockData';

const SUBJECT_EXPANSIONS: Record<string, { name: string; dept: string }> = {
  'Surgery (L)': { name: 'Surgery (Lecture)', dept: 'Department of Surgery' },
  'Surgery (T)': { name: 'Surgery (Tutorial)', dept: 'Department of Surgery' },
  'Medicine (L)': { name: 'Medicine (Lecture)', dept: 'Department of Medicine' },
  'Medicine (T)': { name: 'Medicine (Tutorial)', dept: 'Department of Medicine' },
  'Ward Placement': { name: 'Clinical Ward Placement', dept: 'Clinical Training Division' },
  'ENT (L)': { name: 'ENT - Otorhinolaryngology (Lecture)', dept: 'Department of ENT' },
  'ENT (T)': { name: 'ENT - Otorhinolaryngology (Tutorial)', dept: 'Department of ENT' },
  'Gynae & Obs (T)': { name: 'Gynaecology & Obstetrics (Tutorial)', dept: 'Department of Gynae & Obs' },
  'Gynas & Obs (L)': { name: 'Gynaecology & Obstetrics (Lecture)', dept: 'Department of Gynae & Obs' },
  'Gynae & Obs (L)': { name: 'Gynaecology & Obstetrics (Lecture)', dept: 'Department of Gynae & Obs' },
  'Eye (T)': { name: 'Ophthalmology (Tutorial)', dept: 'Department of Ophthalmology' },
  'Paediatrics (L)': { name: 'Paediatrics (Lecture)', dept: 'Department of Paediatrics' },
  'Pathology (T)': { name: 'Pathology (Tutorial)', dept: 'Department of Pathology' },
  'Pathology (L)': { name: 'Pathology (Lecture)', dept: 'Department of Pathology' },
  'Pharmacology (L)': { name: 'Pharmacology (Lecture)', dept: 'Department of Pharmacology' },
  'For. Medicine (L)': { name: 'Forensic Medicine (Lecture)', dept: 'Department of Forensic Medicine' },
  'Com. Medicine (L)': { name: 'Community Medicine (Lecture)', dept: 'Department of Community Medicine' },
  'Com. Med (T)': { name: 'Community Medicine (Tutorial)', dept: 'Department of Community Medicine' },
  'Medicine & Allied (L)': { name: 'Medicine & Allied Specialties (Lecture)', dept: 'Department of Medicine' },
  'Orthopaedics (L)': { name: 'Orthopaedics (Lecture)', dept: 'Department of Orthopaedics' },
  'Dermatology (L)': { name: 'Dermatology (Lecture)', dept: 'Department of Dermatology' },
  'Microbiology (L)': { name: 'Microbiology (Lecture)', dept: 'Department of Microbiology' },
  'Micro (L)/(Integrated)': { name: 'Microbiology & Integrated Learning (Lecture)', dept: 'Department of Microbiology' },
  'Pharma(A)+FM(B) (T)': { name: 'Pharmacology Section A & Forensic Medicine Section B (Tutorial)', dept: 'Pharma / Forensic Med.' },
  'Pharma(B)+FM(A) (T)': { name: 'Pharmacology Section B & Forensic Medicine Section A (Tutorial)', dept: 'Pharma / Forensic Med.' },
  'Patho(A)/CM(B)-(T)': { name: 'Pathology Section A & Community Medicine Section B (Tutorial)', dept: 'Pathology / Community Med.' },
  'CM(A)/Micro(B)-(T)': { name: 'Community Medicine Section A & Microbiology Section B (Tutorial)', dept: 'Community Med. / Micro.' },
  'Micro(A)/Patho(B)-(T)': { name: 'Microbiology Section A & Pathology Section B (Tutorial)', dept: 'Microbiology / Pathology' }
};

const PERIODS = [
  { id: 1, name: 'Period 1', time: '08:00 AM - 09:00 AM' },
  { id: 2, name: 'Period 2', time: '09:00 AM - 10:00 AM' },
  { id: 'break', name: 'Tiffin Break', time: '10:00 AM - 10:30 AM' },
  { id: 3, name: 'Period 3', time: '10:30 AM - 11:20 AM' },
  { id: 4, name: 'Period 4', time: '11:20 AM - 12:10 PM' },
  { id: 5, name: 'Period 5', time: '12:10 PM - 01:00 PM' },
  { id: 6, name: 'Period 6', time: '01:00 PM - 01:50 PM' },
  { id: 7, name: 'Period 7', time: '01:50 PM - 02:40 PM' }
];

const ROUTINE_DATA: Record<string, Record<string, string[] | 'WEEKEND'>> = {
  Tuesday: {
    '3rd Year': 'WEEKEND',
    '4th Year': 'WEEKEND',
    '5th Year': ['Surgery (L)', 'Medicine (L)', 'Ward Placement', 'Medicine (T)', 'ENT (L)', 'Gynae & Obs (T)', '']
  },
  Wednesday: {
    '3rd Year': ['', 'Pathology (T)', 'Pharma(A)+FM(B) (T)', 'Pharmacology (L)', 'Pharma(B)+FM(A) (T)', 'Pharma(B)+FM(A) (T)', ''],
    '4th Year': ['', 'Patho(A)/CM(B)-(T)', 'Ward Placement', 'Com. Medicine (L)', 'Com. Medicine (L)', 'Medicine & Allied (L)', ''],
    '5th Year': ['Surgery (T)', 'Eye (T)', 'Ward Placement', 'Paediatrics (L)', 'Gynae & Obs (L)', 'Medicine (T)', '']
  },
  Thursday: {
    '3rd Year': ['', 'For. Medicine (L)', 'Ward Placement', 'Pharmacology (L)', 'For. Medicine (L)', 'For. Medicine (L)', ''],
    '4th Year': ['', 'CM(A)/Micro(B)-(T)', 'Com. Med (T)', 'Com. Medicine (L)', 'Microbiology (L)', 'Pathology (L)', 'Microbiology (L)'],
    '5th Year': 'WEEKEND'
  },
  Friday: {
    '3rd Year': ['', 'Pathology (L)', 'Pharmacology (L)', 'Micro (L)/(Integrated)', 'For. Medicine (L)', 'For. Medicine (L)', 'Pathology (L)'],
    '4th Year': ['', 'Microbiology (L)', 'Pathology (L)', 'Pathology (L)', 'Microbiology (L)', 'Pathology (L)', 'Micro(A)/Patho(B)-(T)'],
    '5th Year': ['Medicine (L)', 'ENT (T)', 'Ward Placement', 'Medicine (T)', '', '', '']
  }
};

const getSlotTypeInfo = (slot: string) => {
  if (!slot) return { label: 'Self Study', color: 'bg-slate-50 border-slate-200 text-slate-400', textColor: 'text-slate-500' };
  if (slot.toLowerCase().includes('weekend')) return { label: 'Weekend Recess', color: 'bg-amber-50 border-amber-200 text-amber-700', textColor: 'text-amber-800' };
  if (slot.includes('Placement')) return { label: 'Clinical Ward Placement', color: 'bg-teal-50 border-teal-200 text-teal-700 font-bold', textColor: 'text-teal-900 border-2 border-dashed border-teal-300' };
  if (slot.includes('(L)')) return { label: 'Lecture Session', color: 'bg-emerald-50 border-emerald-200 text-emerald-800 font-semibold', textColor: 'text-emerald-950 border-l-4 border-l-emerald-500 shadow-sm' };
  if (slot.includes('(T)')) return { label: 'Tutorial Session', color: 'bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold', textColor: 'text-indigo-950 border-l-4 border-l-indigo-500 shadow-sm' };
  return { label: 'Instruction Session', color: 'bg-slate-100 border-slate-300 text-slate-700', textColor: 'text-slate-800' };
};

export const Academics = () => {
  const [activeView, setActiveView] = useState<'year' | 'day' | 'grid'>('year');
  const [selectedYear, setSelectedYear] = useState<string>('3rd Year');
  const [selectedDay, setSelectedDay] = useState<string>('Tuesday');

  const courses = [
    {
      title: 'MBBS Program',
      duration: '5 Years + 1 Year Internship',
      description: 'Our flagship co-educational program governed by BM&DC and University of Dhaka standards.',
      icon: GraduationCap,
      features: ['BM&DC Curriculum', 'Dhaka Univ. Affiliated', 'Clinical Excellence']
    },
    {
      title: 'Nursing Programs',
      duration: '4 Years / 3 Years',
      description: 'Comprehensive nursing education including B.Sc. and Diploma programs focusing on patient care.',
      icon: UserCheck,
      features: ['Practical Training', 'Modern Labs', 'Professional Ethics']
    },
    {
      title: 'Medical Technology',
      duration: '3 Years',
      description: 'Specialized diploma courses in various medical technologies and diagnostic support services.',
      icon: BookOpen,
      features: ['Skill Oriented', 'Job Ready', 'Advanced Equipment']
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-emerald-950 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/d/1ikKvNt8qrMg9HWNvd5pIg-QbHHw_SwOX" 
            alt="Academics Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Programs</h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            The college offers a co-educational MBBS program with a duration of 05 years, strictly governed by the standards of the BM&DC and the University of Dhaka.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Goal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-600 rounded-full" />
                Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ensuring a learning environment in undergraduate medical programme that encourages and promotes development of clinically, socially and culturally competent professionals motivated to serve the community with compassion and dedication.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-emerald-900 text-white lg:scale-105 shadow-2xl shadow-emerald-900/20 z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-400 rounded-full" />
                Mission
              </h3>
              <ul className="space-y-4 text-emerald-100/80">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>To provide quality education with basic principles, methods and knowledge adequate to practice preventive, curative and promotive healthcare in the community.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>To prepare professionals competent to deal with ethical and professional issues, having communication and decision making skills and attitudes, and capable of providing leadership and conducting research for future progression as a change agent.</span>
                </li>
              </ul>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-600 rounded-full" />
                Goal
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                To produce competent, compassionate, reflective and dedicated health care professionals who:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">• Consider the care and safety of their patients their first concern.</li>
                <li className="flex items-start gap-2">• Establish and maintain good relationship with patients, their attendants and colleagues.</li>
                <li className="flex items-start gap-2">• Are honest, trustworthy and act with integrity.</li>
                <li className="flex items-start gap-2">• Are committed to keep their knowledge and skill up-to-date through ‘Continuous Professional Development’.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Info */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Basic Information about MBBS Course</h2>
            <p className="text-slate-600">Key details regarding the Bachelor of Medicine & Bachelor of Surgery program.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Course Name', value: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)' },
              { label: 'Medium of Instruction', value: 'English' },
              { label: 'Duration', value: '5 Years + 1 Year Mandatory Logbook based Rotatory Internship' },
              { label: 'Selection Procedure', value: 'According to decision by the proper competent authority as per merit.' },
              { label: 'Prerequisites', value: 'HSC or equivalent with Science (Biology, Physics, Chemistry)' },
              { label: 'Grade Requirements', value: 'Candidate has to secure required grade point in the SSC and HSC examinations as per rules & regulation of the government of Bangladesh.' },
              { label: 'Post Mortem Training', value: 'Post mortem visit at Dhaka Medical College Morgue is arranged for practical demonstration.' },
              { label: 'Teaching Methodology', value: 'Integrated teaching with students participation.' },
            ].map((info) => (
              <div key={info.label} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm shadow-emerald-500/5 hover:border-emerald-100 hover:shadow-md transition-all">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">{info.label}</p>
                <p className="text-emerald-950 font-bold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="section-padding bg-emerald-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://lh3.googleusercontent.com/d/1JWzeb0Vf8KHwGh4VZzqwJSC6BaxeyqzT" 
            alt="Students Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1JWzeb0Vf8KHwGh4VZzqwJSC6BaxeyqzT" 
                alt="Medical Students" 
                className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover border-4 border-emerald-500/30"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-600 rounded-3xl p-8 flex flex-col justify-center shadow-2xl">
                <GraduationCap size={48} className="mb-4 opacity-50" />
                <p className="text-xl font-bold">Future Doctors</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Nurturing Excellence in Every Student</h2>
              <p className="text-emerald-100/70 text-lg leading-relaxed mb-8">
                Our students are at the heart of everything we do. Through rigorous academic training and hands-on clinical experience, we prepare them to meet the challenges of modern medicine with skill and compassion.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
                  <p className="text-sm text-emerald-100/60 uppercase tracking-widest">Clinical Exposure</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">Global</div>
                  <p className="text-sm text-emerald-100/60 uppercase tracking-widest">Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Objectives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Objectives of MBBS Course</h2>
            <p className="text-slate-600">At the end of the MBBS Course, students shall develop in three key areas.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">1. Knowledge & Understanding</h3>
              <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <li>• The sciences upon which Medicine depends and the scientific and experimental methods.</li>
                <li>• The structure, function and normal growth and development of the human body and the workings of the mind.</li>
                <li>• The etiology, natural history and prognosis of common mental and physical ailments.</li>
                <li>• Normal pregnancy and childbirth, obstetric emergencies, and family planning.</li>
                <li>• Principles of prevention, therapy, rehabilitation, and care of the dying.</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">2. Professional Skills</h3>
              <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <li>• Elicit, record and interpret medical history, symptoms and physical signs.</li>
                <li>• Carry out simple practical clinical procedures and deal with medical emergencies.</li>
                <li>• Communicate effectively and sensitively with patients and their relatives.</li>
                <li>• Communicate clinical information accurately and concisely to colleagues.</li>
                <li>• Use laboratory and diagnostic services effectively and economically.</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-emerald-950">3. Appropriate Attitudes</h3>
              <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <li>• Recognition that a blend of scientific and humanitarian approaches is needed.</li>
                <li>• A capacity for self-education and lifelong learning.</li>
                <li>• Ability to assess the reliability of evidence and relevance of scientific knowledge.</li>
                <li>• A continuing concern for the interests and dignity of patients.</li>
                <li>• Recognition of own limitations and willingness to seek help.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding bg-emerald-950 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Learning Outcomes of MBBS Course</h2>
            <p className="text-emerald-100/60">Essential competences for fresh graduates grouped under three broad headings.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">I. Scientific Basis of Medical Practice</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed">
                The graduate will understand and apply basic bio-medical principles (Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, etc.) to:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-emerald-100/50">
                <li>• Understand homeostasis and disease mechanisms.</li>
                <li>• Apply psychological and sociological concepts to health.</li>
                <li>• Select appropriate investigations and treatments.</li>
                <li>• Understand disease surveillance and prevention.</li>
                <li>• Undertake critical appraisal of scientific literature.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">II. The Doctor as a Practitioner</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed">
                The graduate will have the ability to:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-emerald-100/50">
                <li>• Carry out consultations and perform comprehensive examinations.</li>
                <li>• Diagnose and manage clinical cases or refer when necessary.</li>
                <li>• Provide immediate care in medical emergencies.</li>
                <li>• Prescribe drugs safely, effectively and economically.</li>
                <li>• Carry out practical procedures safely and effectively.</li>
                <li>• Apply health informatics and communicate effectively.</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">III. The Doctor as a Professional</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed">
                The graduate will:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-emerald-100/50">
                <li>• Apply ethical, moral and legal principles to medical practice.</li>
                <li>• Respect BM&DC's ethical guidance and standards.</li>
                <li>• Demonstrate professional values: excellence, altruism, compassion.</li>
                <li>• Reflect, learn and teach as part of lifelong development.</li>
                <li>• Work effectively within multi-professional teams.</li>
                <li>• Protect patients and improve care through risk management.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Academic Departments</h2>
            <p className="text-slate-600">Our college features dedicated departments for pre-clinical and para-clinical studies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Anatomy', 'Physiology', 'Biochemistry', 
              'Pharmacology', 'Pathology', 'Microbiology', 
              'Forensic Medicine', 'Community Medicine'
            ].map((deptName) => {
              const dept = DEPARTMENTS.find(d => d.name.includes(deptName));
              return (
                <motion.div
                  key={deptName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-emerald-950 mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                    {dept?.name || `Department of ${deptName}`}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {dept?.description || 'Dedicated to excellence in medical education and research.'}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Class Routine Section */}
      <section id="class-routine" className="section-padding bg-emerald-50/30 border-y border-emerald-100/50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
              Academic Timetable
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mt-4 mb-4">
              Final Class Routine
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Official academic schedule for MBBS 3rd, 4th, and 5th year students, as authorized by the Principal of Monowara Sikder Medical College.
            </p>
          </div>

          {/* View Selection Controls */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 pb-6 border-b border-slate-200">
            {/* Main Tabs */}
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
              {[
                { id: 'year', label: 'By Year Track', icon: Layers },
                { id: 'day', label: 'By Day Plan', icon: Calendar },
                { id: 'grid', label: 'Full Matrix Grid', icon: Table }
              ].map((tab) => {
                const Icon = tab.icon;
                const active = activeView === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveView(tab.id as 'year' | 'day' | 'grid')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      active
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sub-Filters based on active main tab */}
            {activeView === 'year' && (
              <div className="flex bg-white/80 p-1 rounded-xl border border-emerald-100 shadow-sm">
                {['3rd Year', '4th Year', '5th Year'].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                      selectedYear === year
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}

            {activeView === 'day' && (
              <div className="flex bg-white/80 p-1 rounded-xl border border-emerald-100 shadow-sm">
                {['Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                      selectedDay === day
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Timetable Contents */}
          <AnimatePresence mode="wait">
            {activeView === 'year' && (
              <motion.div
                key={`year-${selectedYear}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {['Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => {
                  const dayRoutine = ROUTINE_DATA[day]?.[selectedYear];
                  const isWeekend = dayRoutine === 'WEEKEND';

                  return (
                    <div
                      key={day}
                      className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                    >
                      {/* Day Header */}
                      <div className="p-5 bg-emerald-950 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-emerald-400" />
                          <span className="font-bold tracking-wide">{day}</span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-800 text-emerald-200 uppercase">
                          {selectedYear}
                        </span>
                      </div>

                      {/* Day Body / Periods */}
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        {isWeekend ? (
                          <div className="flex flex-col items-center justify-center text-center py-12 px-4 flex-grow my-auto">
                            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-4 border border-amber-100">
                              <Clock size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-amber-900 mb-1">Weekly Recess</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                              No regular classes scheduled on this day. Use this time for hospital clinic rotations or self-directed learning.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {(dayRoutine as string[]).map((slot, idx) => {
                              return (
                                <React.Fragment key={idx}>
                                  {idx === 2 && (
                                    <div className="flex items-center gap-3 py-1.5 px-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-800 text-xs">
                                      <Clock size={12} className="text-amber-600 shrink-0" />
                                      <span className="font-bold uppercase tracking-wider text-[10px]">Tiffin Break</span>
                                      <span className="text-slate-500 ml-auto whitespace-nowrap">10:00 - 10:30 AM</span>
                                    </div>
                                  )}

                                  <div className={`p-3 rounded-2xl border transition-all ${getSlotTypeInfo(slot).color}`}>
                                    <div className="flex justify-between items-start mb-1 gap-1">
                                      <span className="text-[10px] font-bold uppercase py-0.5 px-1.5 bg-slate-900/5 text-slate-600 rounded">
                                        Period {idx + 1 + (idx >= 2 ? 1 : 0)}
                                      </span>
                                      <span className="text-[10px] text-slate-600 flex items-center gap-1 font-medium select-none">
                                        <Clock size={10} className="text-slate-600 shrink-0" />
                                        {idx < 2 ? PERIODS[idx].time.replace(':00', '') : PERIODS[idx + 1].time.replace(':00', '')}
                                      </span>
                                    </div>
                                    <h4 className={`text-sm font-bold leading-dense ${getSlotTypeInfo(slot).textColor}`}>
                                      {slot || '---'}
                                    </h4>
                                    {slot && (
                                      <div className="mt-1 dark:opacity-80">
                                        <p className="text-[10px] text-slate-500 font-medium leading-normal line-clamp-2">
                                          {SUBJECT_EXPANSIONS[slot]?.name || slot}
                                        </p>
                                        <p className="text-[9px] text-emerald-800/80 font-bold tracking-wide uppercase mt-0.5">
                                          {SUBJECT_EXPANSIONS[slot]?.dept || 'Academic Block'}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeView === 'day' && (
              <motion.div
                key={`day-${selectedDay}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {['3rd Year', '4th Year', '5th Year'].map((year) => {
                  const dayRoutine = ROUTINE_DATA[selectedDay]?.[year];
                  const isWeekend = dayRoutine === 'WEEKEND';

                  return (
                    <div
                      key={year}
                      className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                    >
                      {/* Year Track Header */}
                      <div className="p-5 bg-emerald-990 bg-emerald-900 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Layers size={18} className="text-emerald-300" />
                          <span className="font-bold tracking-wide">{year} Schedule</span>
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 uppercase tracking-wider">
                          {selectedDay}
                        </span>
                      </div>

                      {/* Timeline Body */}
                      <div className="p-6 flex-grow flex flex-col justify-center">
                        {isWeekend ? (
                          <div className="flex flex-col items-center justify-center text-center py-20 px-4">
                            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-4 border border-amber-100">
                              <Calendar size={28} />
                            </div>
                            <h4 className="text-lg font-bold text-amber-900 mb-1">Academic Recess</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
                              Enjoy your weekend! No lecture or tutorial classes are rostered today for {year}.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {(dayRoutine as string[]).map((slot, idx) => {
                              return (
                                <React.Fragment key={idx}>
                                  {idx === 2 && (
                                    <div className="flex items-center gap-3 py-2 px-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-800 text-xs shadow-inner">
                                      <Clock size={12} className="text-amber-500 shrink-0" />
                                      <span className="font-bold uppercase tracking-wider text-[10px]">Tiffin Break</span>
                                      <span className="text-slate-500 ml-auto font-medium">10:00 - 10:30 AM</span>
                                    </div>
                                  )}

                                  <div className="flex items-start gap-4 p-1 rounded-2xl hover:bg-slate-50/50 transition-colors">
                                    {/* Period column */}
                                    <div className="w-20 shrink-0 pt-1 text-right">
                                      <span className="block text-xs font-bold text-slate-700 font-sans">Period {idx + 1 + (idx >= 2 ? 1 : 0)}</span>
                                      <span className="block text-[10px] text-slate-500 overflow-hidden font-medium select-none font-mono">
                                        {idx < 2 ? PERIODS[idx].time.replace(':00', '') : PERIODS[idx + 1].time.replace(':00', '')}
                                      </span>
                                    </div>

                                    {/* Slot card */}
                                    <div className={`flex-grow p-3 rounded-2xl border ${getSlotTypeInfo(slot).color}`}>
                                      <div className="flex justify-between items-center mb-0.5">
                                        <h4 className={`text-sm font-bold ${getSlotTypeInfo(slot).textColor}`}>
                                          {slot || 'Self-Directed Block'}
                                        </h4>
                                        <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                                          slot ? 'bg-slate-900/5 text-slate-500' : 'bg-slate-200 text-slate-400'
                                        }`}>
                                          {getSlotTypeInfo(slot).label}
                                        </span>
                                      </div>
                                      {slot && (
                                        <div className="mt-0.5">
                                          <p className="text-[10px] text-slate-500 font-medium leading-tight">
                                            {SUBJECT_EXPANSIONS[slot]?.name || slot}
                                          </p>
                                          <p className="text-[9px] text-emerald-800/80 font-bold tracking-wide uppercase">
                                            {SUBJECT_EXPANSIONS[slot]?.dept || 'Department Block'}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeView === 'grid' && (
              <motion.div
                key="grid-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
              >
                {/* Guide banner */}
                <div className="p-4 bg-emerald-950 text-white flex items-center justify-start gap-2.5 border-b border-white/5">
                  <Info size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-emerald-100/90 leading-relaxed font-sans">
                    Interactive Grid Layout: This table corresponds to the master copy signed by the Principal. Under-represented days (Saturday–Monday_ utilize separate departments clinical rosters.
                  </span>
                </div>

                {/* Table container */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse table-fixed min-w-[1000px]">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 text-xs font-bold leading-normal">
                        <th className="p-4 w-[100px] bg-slate-100 border-r border-slate-200 font-extrabold sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.03)] text-emerald-950">Day</th>
                        <th className="p-4 w-[90px] bg-slate-150 border-r border-slate-200 font-semibold sticky left-[100px] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.03)] text-emerald-900">Year</th>
                        <th className="p-3 w-[150px] border-r border-slate-200 text-center">
                          <span className="block font-bold">Period 1</span>
                          <span className="block text-[10px] text-slate-400 font-medium">08:00 - 09:00 AM</span>
                        </th>
                        <th className="p-3 w-[150px] border-r border-slate-200 text-center">
                          <span className="block font-bold">Period 2</span>
                          <span className="block text-[10px] text-slate-400 font-medium">09:00 - 10:00 AM</span>
                        </th>
                        <th className="p-3 w-[70px] bg-amber-500/5 text-amber-700 text-center border-r border-slate-200 font-extrabold text-[10px] tracking-wider uppercase select-none font-sans">
                          Tiffin Break
                          <span className="block text-[8px] text-amber-600/70 lowercase normal-case mt-0.5">30 mins</span>
                        </th>
                        <th className="p-3 w-[150px] border-r border-slate-200 text-center">
                          <span className="block font-bold">Period 3</span>
                          <span className="block text-[10px] text-slate-400 font-medium">10:30 - 11:20 AM</span>
                        </th>
                        <th className="p-3 w-[150px] border-r border-slate-200 text-center">
                          <span className="block font-bold">Period 4</span>
                          <span className="block text-[10px] text-slate-400 font-medium">11:20 - 12:10 PM</span>
                        </th>
                        <th className="p-3 w-[150px] border-r border-slate-200 text-center">
                          <span className="block font-bold">Period 5</span>
                          <span className="block text-[10px] text-slate-400 font-medium">12:10 - 01:00 PM</span>
                        </th>
                        <th className="p-3 w-[150px] border-r border-slate-200 text-center">
                          <span className="block font-bold">Period 6</span>
                          <span className="block text-[10px] text-slate-400 font-medium">01:00 - 01:50 PM</span>
                        </th>
                        <th className="p-3 w-[150px] border-r border-slate-200 text-center">
                          <span className="block font-bold">Period 7</span>
                          <span className="block text-[10px] text-slate-400 font-medium">01:50 - 02:40 PM</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-xs">
                      {['Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => {
                        const years = ['3rd Year', '4th Year', '5th Year'];
                        return years.map((year, yearIdx) => {
                          const dayRoutine = ROUTINE_DATA[day]?.[year];
                          const isWeekend = dayRoutine === 'WEEKEND';

                          // Standard spacing layout helper
                          const showDaySpan = yearIdx === 0;

                          // Checks for merged Tuesday 3rd & 4th Year Weekend cells
                          const isTuesdayWeekendSpan = day === 'Tuesday' && (year === '3rd Year' || year === '4th Year');

                          if (day === 'Tuesday' && year === '4th Year') {
                            // Suppress this row's details since 3rd Year and 4th Year Tuesday is fully spanned
                            return null;
                          }

                          return (
                            <tr key={`${day}-${year}`} className="hover:bg-slate-50/20 group transition-all">
                              {/* Day Name Column Span */}
                              {showDaySpan ? (
                                <td
                                  rowSpan={day === 'Tuesday' ? 2 : 3}
                                  className="p-4 font-bold text-center bg-slate-50 border-r border-slate-200 align-middle sticky left-0 group-hover:bg-slate-50 select-none text-emerald-950 font-sans"
                                >
                                  {day}
                                </td>
                              ) : null}

                              {/* Year Target label */}
                              <td
                                rowSpan={isTuesdayWeekendSpan ? 2 : 1}
                                className="p-4 font-bold border-r border-slate-200 bg-slate-50 group-hover:bg-slate-50 align-middle sticky left-[100px] text-emerald-900 border-b border-b-slate-250 select-none shadow-[2px_0_5px_rgba(0,0,0,0.01)] font-sans"
                              >
                                {isTuesdayWeekendSpan ? '3rd & 4th Year' : year}
                              </td>

                              {/* Special Tuesday 3rd & 4th Weekend Spanned Cell */}
                              {isTuesdayWeekendSpan ? (
                                <td colSpan={2} className="p-3 bg-amber-50/60 border-r border-slate-200 align-middle text-center py-8">
                                  <span className="block font-semibold text-amber-700 tracking-wider uppercase text-[10px] font-sans">W E E K E N D</span>
                                </td>
                              ) : isWeekend ? (
                                <td colSpan={2} className="p-3 bg-amber-50/60 border-r border-slate-200 align-middle text-center py-6">
                                  <span className="block font-semibold text-amber-700 tracking-wider uppercase text-[10px] font-sans">Weekend</span>
                                </td>
                              ) : (
                                <>
                                  {/* Period 1 */}
                                  <td className="p-2 border-r border-slate-200 text-center align-middle">
                                    {dayRoutine[0] ? (
                                      <div className={`p-2 rounded-xl border text-[10px] ${getSlotTypeInfo(dayRoutine[0]).color}`}>
                                        <b className="block">{dayRoutine[0]}</b>
                                      </div>
                                    ) : (
                                      <span className="text-slate-300">---</span>
                                    )}
                                  </td>
                                  {/* Period 2 */}
                                  <td className="p-2 border-r border-slate-200 text-center align-middle">
                                    {dayRoutine[1] ? (
                                      <div className={`p-2 rounded-xl border text-[10px] ${getSlotTypeInfo(dayRoutine[1]).color}`}>
                                        <b className="block">{dayRoutine[1]}</b>
                                      </div>
                                    ) : (
                                      <span className="text-slate-300">---</span>
                                    )}
                                  </td>
                                </>
                              )}

                              {/* Tiffin Break - static space in middle */}
                              <td className="bg-amber-100/50 border-r border-slate-200 align-middle text-center p-1 text-[9px] font-bold text-amber-855 select-none uppercase font-sans">
                                BREAK
                              </td>

                              {/* After break periods */}
                              {isTuesdayWeekendSpan ? (
                                <td colSpan={5} className="p-3 bg-amber-50/60 transition-all text-center align-middle">
                                  <span className="block font-bold text-amber-700 tracking-widest uppercase text-xs font-sans">W E E K E N D</span>
                                </td>
                              ) : isWeekend ? (
                                <td colSpan={5} className="p-3 bg-amber-50/60 transition-all text-center align-middle">
                                  <span className="block font-semibold text-amber-700 tracking-wider uppercase text-xs font-sans">Weekend Rest</span>
                                </td>
                              ) : (
                                <>
                                  {/* Period 3 */}
                                  <td className="p-2 border-r border-slate-200 text-center align-middle font-sans">
                                    {dayRoutine[2] ? (
                                      <div className={`p-2 rounded-xl border text-[10px] ${getSlotTypeInfo(dayRoutine[2]).color}`}>
                                        <b className="block">{dayRoutine[2]}</b>
                                      </div>
                                    ) : (
                                      <span className="text-slate-300">---</span>
                                    )}
                                  </td>
                                  {/* Period 4 */}
                                  <td className="p-2 border-r border-slate-200 text-center align-middle font-sans">
                                    {dayRoutine[3] ? (
                                      <div className={`p-2 rounded-xl border text-[10px] ${getSlotTypeInfo(dayRoutine[3]).color}`}>
                                        <b className="block">{dayRoutine[3]}</b>
                                      </div>
                                    ) : (
                                      <span className="text-slate-300">---</span>
                                    )}
                                  </td>
                                  {/* Period 5 */}
                                  <td className="p-2 border-r border-slate-200 text-center align-middle font-sans">
                                    {dayRoutine[4] ? (
                                      <div className={`p-2 rounded-xl border text-[10px] ${getSlotTypeInfo(dayRoutine[4]).color}`}>
                                        <b className="block">{dayRoutine[4]}</b>
                                      </div>
                                    ) : (
                                      <span className="text-slate-300">---</span>
                                    )}
                                  </td>
                                  {/* Period 6 */}
                                  <td className="p-2 border-r border-slate-200 text-center align-middle font-sans">
                                    {dayRoutine[5] ? (
                                      <div className={`p-2 rounded-xl border text-[10px] ${getSlotTypeInfo(dayRoutine[5]).color}`}>
                                        <b className="block">{dayRoutine[5]}</b>
                                      </div>
                                    ) : (
                                      <span className="text-slate-300">---</span>
                                    )}
                                  </td>
                                  {/* Period 7 */}
                                  <td className="p-2 border-r border-slate-200 text-center align-middle font-sans">
                                    {dayRoutine[6] ? (
                                      <div className={`p-2 rounded-xl border text-[10px] ${getSlotTypeInfo(dayRoutine[6]).color}`}>
                                        <b className="block">{dayRoutine[6]}</b>
                                      </div>
                                    ) : (
                                      <span className="text-slate-300">---</span>
                                    )}
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        });
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Legend footer */}
                <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row flex-wrap items-center gap-6 justify-between rounded-b-3xl">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-xs font-bold text-slate-500 font-sans">Legend:</span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 font-medium font-sans">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                      Lectures (L)
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100 font-medium font-sans">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
                      Tutorials (T)
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100 font-medium font-sans">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block" />
                      Ward Placements
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-150 font-medium font-sans">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                      Weekend Recess
                    </span>
                  </div>
                  
                  <div className="text-right text-[10px] text-slate-500 font-bold shrink-0 font-mono">
                    Authorized Signatory: Prof. Dr. Principal, Monowara Sikder Medical College
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Admission Details</h2>
            <p className="text-slate-600">Comprehensive criteria for local and international applicants.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Bangladeshi Students */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-emerald-950 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-600 rounded-full" />
                For Bangladeshi Students
              </h2>
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                  <h4 className="text-lg font-bold text-emerald-950 mb-4">Eligibility Criteria</h4>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Candidates must have passed SSC and HSC or equivalent examinations with Biology, Chemistry, and Physics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>A minimum combined GPA of <strong>9.00</strong> is required across both SSC and HSC.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>A minimum GPA of <strong>3.5</strong> is required in Biology at the HSC level.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-emerald-950 mb-4">Application Process</h4>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                    The application process is conducted online through the DGHS website (<a href="https://dghs.gov.bd" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">https://dghs.gov.bd</a>), where students must fill out the MBBS Admission Form during the designated period.
                  </p>
                </div>
              </div>
            </div>

            {/* Foreign Students */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-emerald-950 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-emerald-600 rounded-full" />
                For Foreign Students
              </h2>
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-emerald-950 text-white shadow-xl shadow-emerald-950/20">
                  <h4 className="text-lg font-bold mb-4 text-emerald-400">Eligibility & Requirements</h4>
                  <ul className="space-y-3 text-emerald-100/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>Candidates must have completed 12 years of schooling, equivalent to the SSC and HSC levels in Bangladesh.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>A minimum combined GPA of <strong>7.0</strong> is required in equivalent examinations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>A minimum GPA of <strong>3.5</strong> is required in Biology.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>Physics, Chemistry, and Biology must have been studied in the 12th grade.</span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-emerald-950 mb-4">Selection Process</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    The selection process is merit-based. Upon approval from the DGHS, students will receive an official offer letter from the medical college.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
