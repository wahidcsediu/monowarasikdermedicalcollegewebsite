import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search } from 'lucide-react';
import { DEPARTMENTS } from '@/src/data/mockData';
import { cn } from '@/src/lib/utils';
import { ThemeToggle } from '@/src/components/ui/ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Clinical Departments', path: '/departments', hasMega: true },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Services', path: '/services' },
    { name: 'Academics', path: '/academics' },
    { name: 'Awards', path: '/awards' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 dark:bg-emerald-950/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
    )}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white dark:bg-emerald-900 rounded-xl flex items-center justify-center shadow-lg overflow-hidden border border-emerald-100 dark:border-emerald-800">
              <img 
                src="https://lh3.googleusercontent.com/d/13I2fme5OGbsbS5JAsSxet0o0Sz-rZspF" 
                alt="MSMCH Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="hidden md:block">
              <h1 className={cn(
                "text-lg font-bold leading-tight",
                isScrolled ? "text-emerald-900 dark:text-white" : "text-white"
              )}>
                Monowara Sikder
              </h1>
              <p className={cn(
                "text-[10px] uppercase tracking-widest",
                isScrolled ? "text-emerald-600 dark:text-emerald-400" : "text-emerald-200"
              )}>
                Medical College & Hospital
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                onMouseLeave={() => link.hasMega && setActiveMenu(null)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    'text-[11px] xl:text-[13px] font-bold transition-all duration-300 flex items-center space-x-1 px-1.5 xl:px-3 py-2 rounded-lg whitespace-nowrap',
                    isScrolled 
                      ? 'text-emerald-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-white/5' 
                      : 'text-white hover:text-emerald-300 hover:bg-white/10',
                    location.pathname === link.path && (
                      isScrolled 
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-white/5 shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                        : 'text-emerald-400 bg-white/10 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                    )
                  )}
                >
                  <span>{link.name}</span>
                  {link.hasMega && <ChevronDown size={14} />}
                </Link>

                {/* Mega Menu */}
                {link.hasMega && (
                  <AnimatePresence>
                    {activeMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100 p-6 mt-2 grid grid-cols-3 gap-4"
                      >
                        {DEPARTMENTS.map((dept) => (
                          <Link
                            key={dept.id}
                            to={`/departments/${dept.id}`}
                            className="p-3 rounded-xl hover:bg-emerald-50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all group border border-transparent hover:border-emerald-100"
                          >
                            <h4 className="text-sm font-bold text-emerald-900 group-hover:text-emerald-600">{dept.name}</h4>
                            <p className="text-xs text-slate-500 line-clamp-1">{dept.description}</p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <button className="p-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110">
              <Search size={18} />
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
             <button className={cn(isScrolled ? "text-emerald-900" : "text-white")}>
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(isScrolled ? "text-emerald-900" : "text-white")}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-emerald-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-medium text-emerald-900 hover:bg-emerald-50 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-emerald-100">
                <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold">
                  Emergency Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/13I2fme5OGbsbS5JAsSxet0o0Sz-rZspF" 
                  alt="MSMCH Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight">Monowara Sikder</h1>
                <p className="text-[10px] uppercase tracking-widest text-emerald-400">Medical College & Hospital</p>
              </div>
            </div>
            <p className="text-emerald-100/60 text-sm leading-relaxed">
              Providing world-class medical education and healthcare services with compassion and excellence.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-emerald-100/60 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="hover:text-emerald-400 transition-colors">Departments</Link></li>
              <li><Link to="/faculty" className="hover:text-emerald-400 transition-colors">Our Faculty</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-400 transition-colors">Academics</Link></li>
              <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Clinical Departments</h3>
            <ul className="space-y-4 text-emerald-100/60 text-sm">
              {DEPARTMENTS.slice(0, 5).map(dept => (
                <li key={dept.id}><Link to={`/departments/${dept.id}`} className="hover:text-emerald-400 transition-colors">{dept.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-emerald-100/60 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-400 shrink-0" />
                <span>Madhupur, Bhedergonj, Shariatpur, Bangladesh</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <span>College: +880 1341 778776</span>
                  <span>Hospital: +880 1746 069727</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <span>msmch.2015@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-emerald-100/40 text-xs">
          <p>© 2024 Monowara Sikder Medical College & Hospital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
