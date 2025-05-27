import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-36 pb-24 md:pt-48 md:pb-36 bg-section relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[60vh]">
        <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px] xl:w-[450px] order-1 md:order-2">
          <img src="/Dra.Pietra.png" alt="Enf. Pietra Giacomolli" className="rounded-3xl shadow-2xl w-full object-cover" />
        </div>
        <div className="max-w-xl text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-dmserif text-white leading-tight mb-8">
            Perfuração e Estética<br />Humanizada
          </h1>
          <p className="text-lg md:text-xl text-stone-700 mb-12">
            Por Enf. Pietra Giacomolli — Transformando autoestima com técnica e sensibilidade.
          </p>
          <a 
            href="https://wa.me/SEUNUMEROAQUI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-10 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            <span className="flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0-4.556-3.694-8.25-8.25-8.25S3.75 7.444 3.75 12c0 1.53.438 2.96 1.2 4.167L3 21l4.833-1.95A8.193 8.193 0 0 0 12 20.25c4.556 0 8.25-3.694 8.25-8.25Z" /></svg>
              Agende pelo WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;