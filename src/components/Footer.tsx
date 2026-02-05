import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Buildings',
    'Interior Design',
    'Project Management',
    'Renovations',
  ];

  return (
    <footer ref={ref} className="relative bg-mp-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-mp-sky/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mp-sky/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-mp-sky to-accent rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <span className="text-white font-bold text-xl">MP</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-display font-bold">Mighty Pillars</h3>
                <p className="text-sm text-white/60">Construction & Design</p>
              </div>
            </motion.div>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Building dreams and designing spaces with precision, passion, and unmatched craftsmanship. 
              Your vision, our blueprint.
            </p>
            <div className="flex gap-3">
              {['F', 'I', 'L', 'T'].map((letter, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-mp-sky rounded-xl flex items-center justify-center transition-colors duration-300"
                >
                  {letter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute -bottom-2 left-0 h-0.5 bg-mp-sky rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.button
                    whileHover={{ x: 8 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-mp-sky transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-mp-sky/50 rounded-full group-hover:bg-mp-sky transition-colors" />
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <motion.span 
                className="absolute -bottom-2 left-0 h-0.5 bg-mp-sky rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.span
                    whileHover={{ x: 8 }}
                    className="text-white/70 hover:text-mp-sky transition-colors duration-300 flex items-center gap-2 cursor-pointer group"
                  >
                    <span className="w-1.5 h-1.5 bg-mp-sky/50 rounded-full group-hover:bg-mp-sky transition-colors" />
                    {service}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <motion.span 
                className="absolute -bottom-2 left-0 h-0.5 bg-mp-sky rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors cursor-pointer group"
              >
                <motion.div whileHover={{ rotate: 15 }}>
                  <MapPin className="w-5 h-5 text-mp-sky flex-shrink-0 mt-0.5" />
                </motion.div>
                <div>
                  <p>123 Construction Ave</p>
                  <p>Guntur, AP 522001</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer group"
              >
                <motion.div whileHover={{ rotate: 15 }}>
                  <Phone className="w-5 h-5 text-mp-sky" />
                </motion.div>
                <p>+91 9876543210</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer group"
              >
                <motion.div whileHover={{ rotate: 15 }}>
                  <Mail className="w-5 h-5 text-mp-sky" />
                </motion.div>
                <p>info@mightypillars.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2024 Mighty Pillars. All rights reserved. | Building dreams, designing futures.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="relative w-12 h-12 bg-mp-sky hover:bg-accent rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg group overflow-hidden"
          >
            <ArrowUp className="w-5 h-5 text-white relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
