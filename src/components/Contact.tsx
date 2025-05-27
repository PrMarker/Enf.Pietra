import React from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-base">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-16">
          <h2 className="text-4xl md:text-5xl font-dmserif text-stone-800 text-center mb-4">Agende sua Consulta</h2>
          <p className="text-lg text-stone-600 text-center mb-12">Preencha o formulário abaixo e entraremos em contato</p>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-stone-700 mb-2">Nome completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-stone-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="Seu e-mail"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-stone-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-stone-700 mb-2">Serviço de interesse</label>
                <input 
                  type="text" 
                  id="service" 
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base"
                  placeholder="Ex: Perfuração, HOF, etc."
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-stone-700 mb-2">Mensagem</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-nude-200 focus:outline-none focus:ring-2 focus:ring-section transition-all bg-base resize-none"
                placeholder="Digite sua mensagem"
              />
            </div>
            <div className="flex justify-center pt-2">
              <button 
                type="submit" 
                className="flex items-center gap-2 bg-section hover:bg-nude-500 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5l7.5 7.5 7.5-7.5M12 3v15" /></svg>
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;