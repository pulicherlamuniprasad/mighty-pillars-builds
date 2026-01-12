import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-mp-navy' : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <span className="text-white font-bold text-xl">MP</span>
            </div>
            <div>
              <h1 className={`text-xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-mp-navy' : 'text-white'
              }`}>
                Mighty Pillars
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-white/70'
              }`}>
                Construction & Interior Design
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className={`relative px-5 py-2 font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? activeSection === item.id ? 'text-mp-sky' : 'text-foreground hover:text-mp-sky'
                    : activeSection === item.id ? 'text-mp-sky' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-mp-sky rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-mp-navy hover:bg-mp-sky text-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-mp-navy'
                }`}
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled ? 'text-mp-navy hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-mp-sky/10 text-mp-sky' 
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-mp-navy hover:bg-mp-sky text-white py-4 rounded-xl font-semibold"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
