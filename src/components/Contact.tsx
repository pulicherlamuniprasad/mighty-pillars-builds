import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully! ✨",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Construction Ave", "Guntur, AP 522001"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9876543210", "+91 9123456780"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mightypillars.com", "projects@mightypillars.com"]
    }
  ];

  return (
    <section id="contact" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

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
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-mp-sky/10 text-mp-sky rounded-full text-sm font-semibold mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-title text-foreground mb-6"
          >
            Let's Build Something Together
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-gradient-to-r from-mp-sky to-accent mx-auto rounded-full mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="section-subtitle"
          >
            Ready to start your dream project? Get in touch with us today for a free consultation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-start gap-5 p-6 bg-card rounded-2xl border border-border hover:border-mp-sky/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-mp-sky to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg relative z-10"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="relative z-10">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-mp-sky transition-colors">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gradient-to-br from-mp-navy to-mp-dark rounded-2xl relative overflow-hidden"
            >
              <h4 className="font-bold text-white mb-4 relative z-10">Follow Us</h4>
              <div className="flex gap-3 relative z-10">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social, index) => (
                  <motion.button
                    key={social}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 hover:bg-mp-sky text-white rounded-xl flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                  >
                    {social[0]}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <motion.div 
              className="bg-card p-8 md:p-10 rounded-3xl shadow-xl border border-border relative overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-mp-sky/5 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-display font-bold text-foreground mb-2 relative z-10">
                Send us a Message
              </h3>
              <p className="text-muted-foreground mb-8 relative z-10">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full h-12 bg-background border-border focus:border-mp-sky focus:ring-mp-sky/20 rounded-xl transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    animate={focusedField === 'phone' ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full h-12 bg-background border-border focus:border-mp-sky focus:ring-mp-sky/20 rounded-xl transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  animate={focusedField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full h-12 bg-background border-border focus:border-mp-sky focus:ring-mp-sky/20 rounded-xl transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full bg-background border-border focus:border-mp-sky focus:ring-mp-sky/20 rounded-xl transition-all duration-300 resize-none"
                    placeholder="Tell us about your dream project..."
                  />
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-mp-navy to-mp-dark hover:from-mp-sky hover:to-accent text-white py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <motion.span 
                          className="flex items-center justify-center gap-2"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </motion.span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <motion.span
                            animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.span>
                        </span>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl h-80 relative group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122251.56959958428!2d80.35916684335937!3d16.30675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a754a5b7d0b67%3A0x3e26e1a3e6e0f0c8!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
