import React from 'react';
import { Sparkles, Flame, Scissors, Zap, Heart } from 'lucide-react';
import specializations from '../data/specializations';

const iconMap: Record<string, React.ReactNode> = {
  'Sparkles': <Sparkles size={32} className="text-nude-400" />,
  'Flame': <Flame size={32} className="text-nude-400" />,
  'Scissors': <Scissors size={32} className="text-nude-400" />,
  'Zap': <Zap size={32} className="text-nude-400" />,
  'Heart': <Heart size={32} className="text-nude-400" />,
};

const Specializations: React.FC = () => {
  return (
    <section id="especializacoes" className="py-28 bg-gradient-to-b from-white to-nude-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-dmserif text-stone-800 mb-4 leading-tight">
            Nossos Serviços
          </h2>
          <p className="text-lg text-stone-600 font-medium max-w-2xl mx-auto">
            Procedimentos estéticos realizados com excelência e cuidado
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div 
              key={spec.id}
              className={`bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-6 flex flex-col sm:flex-row items-start gap-4 min-h-[160px] transform transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] hover:bg-nude-50/80 group relative ${
                spec.title === "Otomodelação" ? "border-2 border-nude-400" : ""
              }`}
            >
              {spec.title === "Otomodelação" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-nude-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Especialidade
                </div>
              )}
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-nude-50 rounded-full mb-2 sm:mb-0 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] group-hover:bg-nude-100 transition-colors duration-300">
                {iconMap[spec.icon]}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-stone-700 mb-2 text-left group-hover:text-nude-600 transition-colors duration-300">
                  {spec.title}
                </h3>
                <p className="text-sm text-stone-500 text-left leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;