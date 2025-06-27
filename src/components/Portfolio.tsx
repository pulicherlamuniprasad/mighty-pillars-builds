
import { useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "3BHK Modern Home in Guntur",
      description: "Sleek interiors with modular furniture and open kitchen design.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop&crop=center",
      category: "Residential"
    },
    {
      title: "Office Space in Vijayawada",
      description: "Functional layout, creative lighting, and client-friendly reception area.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&h=400&fit=crop&crop=center",
      category: "Commercial"
    },
    {
      title: "Villa Renovation in Hyderabad",
      description: "Converted an old structure into a premium luxury home.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop&crop=center",
      category: "Renovation"
    },
    {
      title: "Modern Apartment Complex",
      description: "Contemporary design with sustainable materials and smart home features.",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop&crop=center",
      category: "Residential"
    },
    {
      title: "Corporate Headquarters",
      description: "Professional workspace design with collaborative areas and private offices.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=center",
      category: "Commercial"
    },
    {
      title: "Luxury Interior Design",
      description: "High-end residential interiors with custom furniture and premium finishes.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop&crop=center",
      category: "Interior"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-mp-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mp-navy mb-6">What We Have Done</h2>
          <div className="w-20 h-1 bg-mp-sky mx-auto mb-8"></div>
          <p className="text-xl text-mp-grey max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our commitment to quality and innovation
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-12 bg-mp-light rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-96">
              <img 
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-mp-navy text-mp-white px-3 py-1 rounded-full text-sm">
                {projects[selectedProject].category}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-mp-navy mb-4">{projects[selectedProject].title}</h3>
              <p className="text-lg text-mp-grey mb-6">{projects[selectedProject].description}</p>
              <button className="bg-mp-sky hover:bg-mp-navy text-mp-white px-6 py-3 rounded-lg transition-colors duration-300 w-fit">
                View Project Details
              </button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
                selectedProject === index ? 'ring-4 ring-mp-sky' : ''
              }`}
            >
              <div className="relative h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mp-navy/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-mp-white mb-1">{project.title}</h4>
                  <p className="text-sm text-mp-grey">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-mp-navy hover:bg-mp-sky text-mp-white px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
