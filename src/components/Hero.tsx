
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-mp-light to-mp-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-mp-navy leading-tight">
              Building Dreams.<br />
              <span className="text-mp-sky">Designing Spaces.</span>
            </h1>
            <p className="text-xl text-mp-grey leading-relaxed">
              At Mighty Pillars, we turn your vision into reality—brick by brick and board by board. 
              Whether it's a dream home or a smart commercial space, we build with precision and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-mp-navy hover:bg-mp-sky text-mp-white px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-mp-navy text-mp-navy hover:bg-mp-navy hover:text-mp-white px-8 py-3 rounded-lg text-lg transition-all duration-300"
              >
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center"
                alt="Modern building construction"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mp-navy/30 to-transparent"></div>
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-mp-white rounded-lg shadow-lg p-4 border-l-4 border-mp-sky">
              <p className="text-sm text-mp-grey">Projects Completed</p>
              <p className="text-2xl font-bold text-mp-navy">500+</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-mp-white rounded-lg shadow-lg p-4 border-l-4 border-mp-navy">
              <p className="text-sm text-mp-grey">Years Experience</p>
              <p className="text-2xl font-bold text-mp-navy">15+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
