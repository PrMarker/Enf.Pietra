import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-montserrat text-stone-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;