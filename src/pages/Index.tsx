import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
 import ScrollToTop from '@/components/ScrollToTop';
 import WhatsAppButton from '@/components/WhatsAppButton';
 import PageLoader from '@/components/PageLoader';

const Index = () => {
  return (
    <div className="font-sans">
      <PageLoader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
