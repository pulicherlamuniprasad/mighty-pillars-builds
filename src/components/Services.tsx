import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Palette, ClipboardList, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
    <section id="services" ref={containerRef} className="relative py-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mp-sky/50 to-transparent" />
      
      {/* Floating elements with parallax */}
      <motion.div
        style={{ y }}
        className="absolute top-40 left-10 w-72 h-72 bg-mp-sky/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-mp-sky/10 text-mp-sky rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-title text-foreground mb-4"
          >
            What We Do
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-gradient-to-r from-mp-sky to-accent mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="section-subtitle"
          >
            From groundbreaking to finishing touches, we provide comprehensive construction and design services
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -15 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Background with Ken Burns */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  src={service.image} 
                  alt={service.category}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mp-dark via-mp-dark/80 to-mp-dark/40 group-hover:via-mp-dark/70 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 min-h-[340px] flex flex-col justify-end">
                {/* Icon with animation */}
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-mp-sky to-accent rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-mp-sky transition-colors duration-300">
                  {service.category}
                </h3>

                <ul className="space-y-2 mb-4">
                  {service.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + itemIndex * 0.1 }}
                      className="flex items-start gap-3 text-white/80 group-hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-mp-sky mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Arrow with animation */}
                <div className="flex items-center gap-2 text-mp-sky font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative rounded-3xl overflow-hidden cursor-pointer"
        >
          {/* Background Image with parallax */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=400&fit=crop"
              alt="Modern building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mp-navy via-mp-navy/90 to-mp-dark/80" />
          </div>

          {/* Content */}
          <div className="relative px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Have a Unique Idea?
              </h3>
              <p className="text-lg text-white/70 max-w-xl">
                We'll design and build it just the way you want. Let's turn your vision into reality.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-white text-mp-navy hover:bg-mp-sky hover:text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Discuss Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-mp-sky/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
