import React from 'react';

const benefits = [
  {
    icon: (
      <span className="inline-block bg-[#f7e6e0] rounded-full p-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e7c1b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      </span>
    ),
    title: 'Especialista em Estética registrada no Conselho',
    desc: 'Profissional devidamente registrada no conselho de estética, garantindo segurança e qualidade nos procedimentos.'
  },
  {
    icon: (
      <span className="inline-block bg-[#f7e6e0] rounded-full p-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e7c1b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" /></svg>
      </span>
    ),
    title: 'Atendimento Humanizado',
    desc: 'Cuidado personalizado e acolhedor em cada procedimento.'
  },
  {
    icon: (
      <span className="inline-block bg-[#f7e6e0] rounded-full p-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e7c1b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </span>
    ),
    title: 'Técnicas Seguras',
    desc: 'Procedimentos realizados com as mais modernas e seguras técnicas.'
  },
  {
    icon: (
      <span className="inline-block bg-[#f7e6e0] rounded-full p-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e7c1b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17a4 4 0 004-4V7a4 4 0 10-8 0v6a4 4 0 004 4z" /></svg>
      </span>
    ),
    title: 'Experiência Clínica',
    desc: 'Anos de experiência e constante atualização profissional.'
  },
  {
    icon: (
      <span className="inline-block bg-[#f7e6e0] rounded-full p-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e7c1b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8l3 8H9l3-8zm0 0V4m0 4v4" /></svg>
      </span>
    ),
    title: 'Tratamento VIP',
    desc: 'Experiência exclusiva e diferenciada para cada cliente.'
  },
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-dmserif text-stone-800 text-center mb-6">Por que escolher a Enf. Pietra?</h2>
        <p className="text-lg text-stone-600 text-center mb-16">Comprometimento com excelência e bem-estar em cada atendimento</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-10 text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
              {item.icon}
              <h3 className="text-xl font-bold mb-3 text-stone-800">{item.title}</h3>
              <p className="text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;