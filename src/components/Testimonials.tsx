import React, { useState } from 'react';
import testimonials from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const testimonial = testimonials[index];

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos de quem já experimentou nossos serviços
          </p>
        </div>
        <div className="flex items-center justify-center relative max-w-2xl mx-auto">
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-0 z-10 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center text-gray-500 hover:shadow-lg transition top-1/2 -translate-y-1/2"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="bg-white rounded-3xl shadow-lg px-8 py-10 mx-8 w-full max-w-xl flex flex-col items-start">
            <div className="flex items-center mb-4">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover shadow mr-4 border-2 border-gray-100"
                />
              )}
              <div>
                <span className="block font-semibold text-gray-900 text-lg">{testimonial.name}</span>
                {testimonial.role && (
                  <span className="block text-gray-500 text-sm">{testimonial.role}</span>
                )}
                <div className="flex mt-1">
                  {[...Array(testimonial.stars || 5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic text-lg mt-2">"{testimonial.content}"</p>
          </div>
          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute right-0 z-10 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center text-gray-500 hover:shadow-lg transition top-1/2 -translate-y-1/2"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full inline-block transition-colors duration-200 ${i === index ? 'bg-[#c9a39a]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;