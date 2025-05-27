import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="ml-2 hidden md:inline">Fale com a Enf. no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;