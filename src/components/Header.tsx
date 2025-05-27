import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white py-2 border-b border-[#e7c1b3]">
      <div className="container mx-auto px-4 flex justify-center items-center min-h-[48px] relative">
        <div className="flex items-center absolute left-[10%]">
          <img src="/Logotipo.png" alt="Logo Enf. Pietra Giacomolli" className="h-12 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-stone-700 absolute right-[10%]">
          <a href="#" className="hover:underline transition-colors">Início</a>
          <a href="#sobre" className="hover:underline transition-colors">Benefícios</a>
          <a href="#especializacoes" className="hover:underline transition-colors">Serviços</a>
          <a href="#depoimentos" className="hover:underline transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:underline transition-colors">Contato</a>
        </nav>
        <button 
          className="md:hidden text-stone-700 absolute right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#e7c1b3] py-4 animate-fade-up">
          <nav className="flex flex-col space-y-4 px-4 text-base font-medium text-stone-700">
            <a href="#" className="hover:underline py-2" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#sobre" className="hover:underline py-2" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
            <a href="#especializacoes" className="hover:underline py-2" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#depoimentos" className="hover:underline py-2" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a href="#contato" className="hover:underline py-2" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;