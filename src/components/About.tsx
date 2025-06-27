
const About = () => {
  const features = [
    {
      title: "Experienced Team",
      description: "Engineers and designers with 15+ years of expertise",
      icon: "👷‍♂️"
    },
    {
      title: "Transparent Communication",
      description: "Clear timelines and regular project updates",
      icon: "📞"
    },
    {
      title: "Tailor-made Solutions",
      description: "Custom designs for every budget and requirement",
      icon: "🎨"
    },
    {
      title: "One-stop Solution",
      description: "From blueprint to final polish, we handle it all",
      icon: "🏗️"
    }
  ];

  return (
    <section id="about" className="py-20 bg-mp-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mp-navy mb-6">About Us</h2>
          <div className="w-20 h-1 bg-mp-sky mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-mp-navy mb-4">Who We Are</h3>
            <p className="text-lg text-mp-grey leading-relaxed">
              Mighty Pillars is a construction and interior design company built on trust, creativity, and craftsmanship. 
              We believe that a great space starts with a great plan—and even better execution.
            </p>
            
            <h3 className="text-3xl font-bold text-mp-navy mb-4 pt-6">Our Mission</h3>
            <p className="text-lg text-mp-grey leading-relaxed">
              To create lasting structures and beautiful interiors that reflect your taste, lifestyle, and goals.
            </p>

            <div className="bg-mp-sky/10 p-6 rounded-lg border-l-4 border-mp-sky">
              <p className="text-xl font-semibold text-mp-navy italic">
                "Your vision, our blueprint."
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop&crop=center"
              alt="Construction team at work"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-mp-light p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-mp-navy mb-3">{feature.title}</h4>
              <p className="text-mp-grey">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
