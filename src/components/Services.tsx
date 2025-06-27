
const Services = () => {
  const services = [
    {
      category: "Construction",
      icon: "🔨",
      items: [
        "Residential buildings (villas, apartments)",
        "Commercial spaces (offices, showrooms)",
        "Renovations & extensions"
      ]
    },
    {
      category: "Interior Design",
      icon: "🎨",
      items: [
        "Modular kitchens, living rooms, bedrooms",
        "Office interiors",
        "Space planning & custom furniture"
      ]
    },
    {
      category: "Project Management",
      icon: "📋",
      items: [
        "Site supervision",
        "Vendor coordination",
        "Timely delivery tracking"
      ]
    },
    {
      category: "Custom Work",
      icon: "🧰",
      items: [
        "Unique design solutions",
        "Bespoke architectural elements",
        "Personalized space planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-mp-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mp-navy mb-6">What We Do</h2>
          <div className="w-20 h-1 bg-mp-sky mx-auto mb-8"></div>
          <p className="text-xl text-mp-grey max-w-3xl mx-auto">
            From groundbreaking to finishing touches, we provide comprehensive construction and design services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-mp-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-mp-navy mb-6 text-center">{service.category}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-mp-sky mr-3 mt-1">•</span>
                    <span className="text-mp-grey">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-mp-navy rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-mp-white mb-4">Have a Unique Idea?</h3>
          <p className="text-xl text-mp-grey mb-6">
            We'll design and build it just the way you want.
          </p>
          <button className="bg-mp-sky hover:bg-mp-white hover:text-mp-navy text-mp-white px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
