import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ZoomIn, X } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "3BHK Modern Home in Guntur",
      description: "Sleek interiors with modular furniture and open kitchen design. A perfect blend of contemporary aesthetics and functional living spaces.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      category: "Residential"
    },
    {
      title: "Office Space in Vijayawada",
      description: "Functional layout, creative lighting, and client-friendly reception area designed for maximum productivity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      category: "Commercial"
    },
    {
      title: "Villa Renovation in Hyderabad",
      description: "Converted an old structure into a premium luxury home with modern amenities and classic charm.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      category: "Renovation"
    },
    {
      title: "Modern Apartment Complex",
      description: "Contemporary design with sustainable materials and smart home features for urban living.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      category: "Residential"
    },
    {
      title: "Corporate Headquarters",
      description: "Professional workspace design with collaborative areas and private offices for a leading tech company.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      category: "Commercial"
    },
    {
      title: "Luxury Interior Design",
      description: "High-end residential interiors with custom furniture and premium finishes for discerning clients.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      category: "Interior"
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Interior'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-mp-sky/10 text-mp-sky rounded-full text-sm font-semibold mb-6"
          >
            Portfolio
          </motion.span>
          <h2 className="section-title text-foreground mb-6">
            What We Have Done
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-mp-sky to-accent mx-auto rounded-full mb-8" />
          <p className="section-subtitle">
            Explore our portfolio of successful projects that showcase our commitment to quality and innovation
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-mp-navy text-white shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-[500px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedProject}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onClick={() => setLightboxImage(projects[selectedProject].image)}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-mp-dark/60 via-transparent to-transparent" />
                
                {/* Zoom Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLightboxImage(projects[selectedProject].image)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <ZoomIn className="w-5 h-5" />
                </motion.button>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-mp-sky text-white rounded-full text-sm font-semibold">
                  {projects[selectedProject].category}
                </div>
              </div>

              {/* Content */}
              <div className="bg-card p-8 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-mp-sky font-semibold mb-4 block">Featured Project</span>
                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {projects[selectedProject].description}
                    </p>
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-2 text-mp-sky font-semibold group"
                    >
                      View Project Details 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(projects.findIndex(p => p.title === project.title))}
                className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                  selectedProject === projects.findIndex(p => p.title === project.title) 
                    ? 'ring-4 ring-mp-sky shadow-xl' 
                    : 'hover:shadow-2xl'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mp-dark via-mp-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-mp-sky/80 text-white text-xs font-semibold rounded-full mb-3">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-mp-sky transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* View Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            <span className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Project"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
