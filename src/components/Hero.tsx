import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Team' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-construction-site-4928/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-mp-dark/95 via-mp-navy/80 to-mp-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-mp-dark via-transparent to-mp-dark/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-10 w-96 h-96 bg-mp-sky rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-mp-sky rounded-full blur-[150px]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="w-2 h-2 bg-mp-sky rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Leading Construction & Design</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
            >
              Building Dreams.
              <br />
              <span className="text-gradient">Designing Spaces.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/70 leading-relaxed max-w-xl"
            >
              At Mighty Pillars, we turn your vision into reality—brick by brick and board by board. 
              Whether it's a dream home or a smart commercial space, we build with precision and passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="group btn-primary text-lg"
              >
                <span className="flex items-center gap-2">
                  View Our Work
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="transition-transform"
                  >
                    →
                  </motion.span>
                </span>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary text-lg"
              >
                Get a Quote
              </Button>
            </motion.div>

            {/* Play Reel Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={() => setIsVideoPlaying(true)}
              className="flex items-center gap-4 group mt-8"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/20 transition-all duration-300">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-mp-sky/50 animate-ping" />
              </div>
              <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                Watch Our Story
              </span>
            </motion.button>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="counter-box group cursor-pointer"
              >
                <motion.p
                  className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-white/60 font-medium group-hover:text-mp-sky transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-construction-site-4928/1080p.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
