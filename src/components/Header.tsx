
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-mp-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-mp-navy rounded-lg flex items-center justify-center">
              <span className="text-mp-white font-bold text-xl">MP</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-mp-navy">Mighty Pillars</h1>
              <p className="text-sm text-mp-grey">Construction & Interior Design</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('services')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300">Contact</button>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-mp-navy hover:bg-mp-sky text-mp-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Get a Quote
          </Button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-mp-navy"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300 text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300 text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300 text-left">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300 text-left">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-mp-navy hover:text-mp-sky transition-colors duration-300 text-left">Contact</button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-mp-navy hover:bg-mp-sky text-mp-white px-6 py-2 rounded-lg transition-colors duration-300 w-fit"
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
