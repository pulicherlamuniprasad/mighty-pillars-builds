
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-mp-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mp-navy mb-6">Let's Build Something Together</h2>
          <div className="w-20 h-1 bg-mp-sky mx-auto mb-8"></div>
          <p className="text-xl text-mp-grey max-w-3xl mx-auto">
            Ready to start your dream project? Get in touch with us today for a free consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-mp-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-mp-navy mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mp-sky rounded-full flex items-center justify-center">
                    <span className="text-mp-white text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-mp-navy">Address</h4>
                    <p className="text-mp-grey">123 Construction Ave, Guntur, Andhra Pradesh 522001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mp-sky rounded-full flex items-center justify-center">
                    <span className="text-mp-white text-lg">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-mp-navy">Phone</h4>
                    <p className="text-mp-grey">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mp-sky rounded-full flex items-center justify-center">
                    <span className="text-mp-white text-lg">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-mp-navy">Email</h4>
                    <p className="text-mp-grey">info@mightypillars.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-mp-grey/20">
                <h4 className="font-semibold text-mp-navy mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-mp-navy hover:bg-mp-sky text-mp-white rounded-full flex items-center justify-center transition-colors duration-300">
                    📘
                  </button>
                  <button className="w-10 h-10 bg-mp-navy hover:bg-mp-sky text-mp-white rounded-full flex items-center justify-center transition-colors duration-300">
                    📷
                  </button>
                  <button className="w-10 h-10 bg-mp-navy hover:bg-mp-sky text-mp-white rounded-full flex items-center justify-center transition-colors duration-300">
                    💼
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-mp-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-mp-navy mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-mp-navy mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border-mp-grey/30 focus:border-mp-sky focus:ring-mp-sky"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-mp-navy mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full border-mp-grey/30 focus:border-mp-sky focus:ring-mp-sky"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-mp-navy mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border-mp-grey/30 focus:border-mp-sky focus:ring-mp-sky"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mp-navy mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full border-mp-grey/30 focus:border-mp-sky focus:ring-mp-sky"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-mp-navy hover:bg-mp-sky text-mp-white py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
