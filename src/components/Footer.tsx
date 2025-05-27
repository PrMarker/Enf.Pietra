import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e1b1a0] text-[#2a1e1e] font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Links Rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/sobre" className="hover:text-[#2a1e1e]/80 transition-colors">Sobre</a></li>
              <li><a href="/servicos" className="hover:text-[#2a1e1e]/80 transition-colors">Serviços</a></li>
              <li><a href="/contato" className="hover:text-[#2a1e1e]/80 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2a1e1e]/80 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="mb-2">contato@drapietra.com.br</p>
            <p>(51) 99999-9999</p>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-[#2a1e1e]/20 my-6"></div>

        {/* Informações Legais */}
        <div className="text-center">
          <p className="mb-4">© 2025 Dra. Pietra Giacomolli. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6">
            <a href="/privacidade" className="hover:text-[#2a1e1e]/80 transition-colors">Política de Privacidade</a>
            <a href="/termos" className="hover:text-[#2a1e1e]/80 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;