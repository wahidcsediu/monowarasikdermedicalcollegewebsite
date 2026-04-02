import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, UserCheck, FileText, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { NeonButton, GlassCard, FloatingShapes, TextReveal } from '@/src/components/ui/Common';
import { DEPARTMENTS } from '@/src/data/mockData';

export const Academics = () => {
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
            ].map((info) => (
              <div key={info.label} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
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
