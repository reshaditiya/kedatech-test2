import { Footer } from './components/footer';
import { FooterBanner } from './components/footer-banner';
import { Contact } from './components/contact';
import { Testimonials } from './components/testimonials';
import { Pricing } from './components/pricing';
import { Features } from './components/features';
import { Clients } from './components/clients';
import { Hero } from './components/hero';
import { Navbar } from './components/navbar';
import { motion } from 'framer-motion';

function App() {
  return (
    <main className="mx-auto">
      <motion.img
        src="/clouds/cloud-top.svg"
        alt=""
        className="absolute -z-10"
        initial={{
          left: -16,
          opacity: 0,
        }}
        animate={{
          left: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
        }}
      />
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <FooterBanner />
      <Footer />
    </main>
  );
}

export default App;
