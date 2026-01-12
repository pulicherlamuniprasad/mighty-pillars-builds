import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Experienced Team",
      description: "Engineers and designers with 15+ years of expertise",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Transparent Communication",
      description: "Clear timelines and regular project updates",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tailor-made Solutions",
      description: "Custom designs for every budget and requirement",
      icon: Award,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "One-stop Solution",
      description: "From blueprint to final polish, we handle it all",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

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
            About Us
          </motion.span>
          <h2 className="section-title text-foreground mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-mp-sky to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Mighty Pillars</span> is a construction and interior design company built on trust, creativity, and craftsmanship. 
                We believe that a great space starts with a great plan—and even better execution.
              </p>
              
              <div className="relative pl-6 border-l-4 border-mp-sky">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To create lasting structures and beautiful interiors that reflect your taste, lifestyle, and goals.
                </p>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative bg-gradient-to-r from-mp-navy to-mp-dark p-8 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-mp-sky/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-mp-sky/10 rounded-full blur-2xl" />
              <p className="text-2xl md:text-3xl font-display font-bold text-white italic relative z-10">
                "Your vision, our blueprint."
              </p>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="image-hover-zoom rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop"
                  alt="Construction site"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="image-hover-zoom rounded-2xl overflow-hidden shadow-xl mt-8"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"
                  alt="Modern interior"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="image-hover-zoom rounded-2xl overflow-hidden shadow-xl col-span-2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=300&fit=crop"
                  alt="Team at work"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-mp-sky to-accent rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Award Winning</p>
                  <p className="text-xl font-bold text-foreground">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-mp-sky/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-mp-sky transition-colors">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>

              {/* Corner Decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-mp-sky/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
