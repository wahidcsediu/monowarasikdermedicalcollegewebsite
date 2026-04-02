import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, Footer } from '@/src/components/layout/Navigation';
import ScrollToTop from '@/src/components/ui/ScrollToTop';
import { BackToTop } from '@/src/components/ui/BackToTop';
import { LoadingScreen } from '@/src/components/ui/LoadingScreen';
import { Home } from '@/src/pages/Home';
import { About } from '@/src/pages/About';
import { Departments, DepartmentDetail } from '@/src/pages/Departments';
import { Faculty, DoctorProfile } from '@/src/pages/Faculty';
import { HospitalServices as Services } from '@/src/pages/HospitalServices';
import { Academics } from '@/src/pages/Academics';
import { Contact } from '@/src/pages/Contact';
import { FAQ } from '@/src/pages/FAQ';
import { Awards } from '@/src/pages/Awards';
import { News } from '@/src/pages/News';
import { Events } from '@/src/pages/Events';
import { Blogs } from '@/src/pages/Blogs';
import { ServicesOverview } from '@/src/pages/ServicesOverview';
import { SocialFloating } from '@/src/components/ui/SocialFloating';
import { useParams } from 'react-router-dom';

const DepartmentDetailWrapper = () => {
  const { id } = useParams();
  return <DepartmentDetail id={id} />;
};

const DoctorProfileWrapper = () => {
  const { id } = useParams();
  return <DoctorProfile id={id} />;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <LoadingScreen />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <SocialFloating />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/departments" element={<PageWrapper><Departments /></PageWrapper>} />
              <Route path="/departments/:id" element={<PageWrapper><DepartmentDetailWrapper /></PageWrapper>} />
              <Route path="/faculty" element={<PageWrapper><Faculty /></PageWrapper>} />
              <Route path="/faculty/:id" element={<PageWrapper><DoctorProfileWrapper /></PageWrapper>} />
              <Route path="/hospital-services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/academics" element={<PageWrapper><Academics /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
              <Route path="/awards" element={<PageWrapper><Awards /></PageWrapper>} />
              <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
              <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
              <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><ServicesOverview /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
