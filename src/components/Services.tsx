import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Palette, ClipboardList, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      category: "Construction",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      items: [
        "Residential buildings (villas, apartments)",
        "Commercial spaces (offices, showrooms)",
        "Renovations & extensions"
      ]
    },
    {
      category: "Interior Design",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
      items: [
        "Modular kitchens, living rooms, bedrooms",
        "Office interiors",
        "Space planning & custom furniture"
      ]
    },
    {
      category: "Project Management",
      icon: ClipboardList,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      items: [
        "Site supervision",
        "Vendor coordination",
        "Timely delivery tracking"
      ]
    },
    {
      category: "Custom Work",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      items: [
        "Unique design solutions",
        "Bespoke architectural elements",
        "Personalized space planning"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mp-sky/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-mp-sky/10 text-mp-sky rounded-full text-sm font-semibold mb-6"
          >
            Our Services
          </motion.span>
          <h2 className="section-title text-foreground mb-6">
            What We Do
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-mp-sky to-accent mx-auto rounded-full mb-8" />
          <p className="section-subtitle">
            From groundbreaking to finishing touches, we provide comprehensive construction and design services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Background */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mp-dark via-mp-dark/80 to-mp-dark/40 group-hover:via-mp-dark/70 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-br from-mp-sky to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-mp-sky transition-colors">
                  {service.category}
                </h3>

                <ul className="space-y-3 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + itemIndex * 0.1 }}
                      className="flex items-start gap-3 text-white/80 group-hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-mp-sky mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-mp-sky font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=400&fit=crop"
              alt="Modern building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mp-navy via-mp-navy/90 to-mp-dark/80" />
          </div>

          {/* Content */}
          <div className="relative px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Have a Unique Idea?
              </h3>
              <p className="text-xl text-white/70 max-w-xl">
                We'll design and build it just the way you want. Let's turn your vision into reality.
              </p>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="group bg-white text-mp-navy hover:bg-mp-sky hover:text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-mp-sky/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-mp-sky/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
