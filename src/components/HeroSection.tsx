import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-[#eac0b7] px-6 md:px-12 py-20 min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-[#2a1e1e] leading-tight md:leading-snug">
              Perfuração e Estética Humanizada
            </h1>
            <p className="font-['Inter'] text-base md:text-lg text-gray-700 font-light mt-4 max-w-xl">
              Por Enf. Pietra Giacomolli — Transformando autoestima com técnica e sensibilidade.
            </p>
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#6b8e23] text-white px-6 py-3 rounded-full shadow-md mt-8 hover:bg-[#5a7a1d] transition-all duration-300"
              aria-label="Agende uma consulta pelo WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
              <span>Agende pelo WhatsApp</span>
            </a>
          </div>

          {/* Image Container */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 rounded-2xl z-10" />
              <img
                src="/path-to-your-image.jpg"
                alt="Enf. Pietra Giacomolli - Especialista em Estética"
                className="w-full h-full object-cover rounded-2xl shadow-lg drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 