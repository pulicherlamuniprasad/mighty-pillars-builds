
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-mp-navy text-mp-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-mp-sky rounded-lg flex items-center justify-center">
                <span className="text-mp-white font-bold text-xl">MP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mighty Pillars</h3>
                <p className="text-sm text-mp-grey">Construction & Interior Design</p>
              </div>
            </div>
            <p className="text-mp-grey mb-6 max-w-md">
              Building dreams and designing spaces with precision, passion, and unmatched craftsmanship. 
              Your vision, our blueprint.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-mp-sky hover:bg-mp-white hover:text-mp-navy rounded-full flex items-center justify-center transition-colors duration-300">
                📘
              </button>
              <button className="w-10 h-10 bg-mp-sky hover:bg-mp-white hover:text-mp-navy rounded-full flex items-center justify-center transition-colors duration-300">
                📷
              </button>
              <button className="w-10 h-10 bg-mp-sky hover:bg-mp-white hover:text-mp-navy rounded-full flex items-center justify-center transition-colors duration-300">
                💼
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-mp-grey hover:text-mp-sky transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-mp-grey hover:text-mp-sky transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-mp-grey hover:text-mp-sky transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-mp-grey hover:text-mp-sky transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div>
                <p className="text-mp-grey">📍 123 Construction Ave</p>
                <p className="text-mp-grey">Guntur, AP 522001</p>
              </div>
              <p className="text-mp-grey">📞 +91 9876543210</p>
              <p className="text-mp-grey">📧 info@mightypillars.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-mp-grey/20 mt-8 pt-8 text-center">
          <p className="text-mp-grey">
            © 2024 Mighty Pillars. All rights reserved. | Building dreams, designing futures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
