import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

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

  const title = "Who We Are";

  return (
    <section id="about" ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Floating elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-20 w-72 h-72 bg-mp-sky/5 rounded-full blur-3xl"
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
            About Us
          </motion.span>
          
          {/* Animated title */}
          <h2 className="section-title text-foreground mb-4 overflow-hidden">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.03 }}
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-mp-sky to-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Mighty Pillars</span> is a construction and interior design company built on trust, creativity, and craftsmanship. 
                We believe that a great space starts with a great plan—and even better execution.
              </p>
              
              <motion.div 
                className="relative pl-6 border-l-4 border-mp-sky"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To create lasting structures and beautiful interiors that reflect your taste, lifestyle, and goals.
                </p>
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-r from-mp-navy to-mp-dark p-6 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-mp-sky/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-mp-sky/10 rounded-full blur-2xl" />
              <p className="text-xl md:text-2xl font-display font-bold text-white italic relative z-10">
                "Your vision, our blueprint."
              </p>
            </motion.div>
          </motion.div>

          {/* Image Grid with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
              <div className="grid grid-cols-2 gap-3">
              <motion.div 
                style={{ y: imageY }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop"
                  alt="Construction site"
                  className="w-full h-52 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-xl mt-8"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop"
                  alt="Modern interior"
                  className="w-full h-52 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-xl col-span-2"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=300&fit=crop"
                  alt="Team at work"
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-border"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-mp-sky to-accent rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">Award Winning</p>
                  <p className="text-xl font-bold text-foreground">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative bg-card p-6 rounded-xl border border-border hover:border-mp-sky/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div 
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-mp-sky transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>

              {/* Corner Decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-mp-sky/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
