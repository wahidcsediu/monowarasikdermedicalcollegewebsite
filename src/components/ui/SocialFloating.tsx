import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export const SocialFloating = () => {
  const socials = [
    { icon: Facebook, href: '#', color: 'bg-[#1877F2]' },
    { icon: Linkedin, href: '#', color: 'bg-[#0A66C2]' },
    { icon: Twitter, href: '#', color: 'bg-[#1DA1F2]' },
    { icon: Instagram, href: '#', color: 'bg-[#E4405F]' },
    { icon: Youtube, href: '#', color: 'bg-[#FF0000]' },
  ];

  return (
    <div className="fixed bottom-32 right-6 z-50 flex flex-col gap-4">
      {socials.map((social, idx) => (
        <motion.a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.2, x: -5 }}
          className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
        >
          <social.icon size={18} />
        </motion.a>
      ))}
    </div>
  );
};
