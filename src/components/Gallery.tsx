import React from 'react';

const Gallery = () => {
  const images = [
    {
      image: '/HOF.jpg',
      description: 'Resultado Rinomodelação'
    },
    {
      image: '/Perfuração.jpg',
      description: 'Resultado da perfuração humanizada'
    },
    {
      images: ['/Otomodelaçãoh.jpg', '/Otomodelaçãof.jpg'],
      description: 'Resultado da Otomodelação'
    },
    {
      image: '/Jato.jpg',
      description: 'Resultado Jato de Plasma'
    },
    {
      images: ['/PreenchimentoA.jpg', '/PreencimentoDepois.jpg'],
      description: 'Resultado Preenchimento Labial'
    }
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-dmserif text-stone-800 text-center mb-12">
          Galeria de Resultados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                {item.images ? (
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {item.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${item.description} - Imagem ${imgIndex + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-64 object-cover"
                  />
                )}
                <p className="p-4 text-center text-stone-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 