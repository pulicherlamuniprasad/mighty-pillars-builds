import { motion } from 'framer-motion';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
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
    <footer className="relative bg-mp-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mp-sky/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-mp-sky to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">MP</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Mighty Pillars</h3>
                <p className="text-sm text-white/60">Construction & Design</p>
              </div>
            </motion.div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Building dreams and designing spaces with precision, passion, and unmatched craftsmanship. 
              Your vision, our blueprint.
            </p>
            <div className="flex gap-3">
              {['F', 'I', 'L', 'T'].map((letter, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-mp-sky rounded-xl flex items-center justify-center transition-colors duration-300"
                >
                  {letter}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-mp-sky rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-mp-sky transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-mp-sky/50 rounded-full" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-mp-sky rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-mp-sky transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 bg-mp-sky/50 rounded-full" />
                    {service}
                  </motion.span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-mp-sky rounded-full" />
            </h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-mp-sky flex-shrink-0 mt-0.5" />
                <div>
                  <p>123 Construction Ave</p>
                  <p>Guntur, AP 522001</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5 text-mp-sky" />
                <p>+91 9876543210</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5 text-mp-sky" />
                <p>info@mightypillars.com</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2024 Mighty Pillars. All rights reserved. | Building dreams, designing futures.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-mp-sky hover:bg-accent rounded-xl flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
