import React from 'react';

const Gallery = () => {
  const images = [
    {
      before: '/gallery/before1.jpg',
      after: '/gallery/after1.jpg',
      description: 'Resultado do tratamento HOF'
    },
    {
      before: '/gallery/before2.jpg',
      after: '/gallery/after2.jpg',
      description: 'Resultado da perfuração humanizada'
    },
    {
      before: '/gallery/before3.jpg',
      after: '/gallery/after3.jpg',
      description: 'Resultado do tratamento estético'
    }
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-dmserif text-stone-800 text-center mb-12">
          Galeria de Resultados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div>
                    <p className="text-sm text-stone-600 mb-1">Antes</p>
                    <img
                      src={image.before}
                      alt="Antes"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-stone-600 mb-1">Depois</p>
                    <img
                      src={image.after}
                      alt="Depois"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <p className="p-4 text-center text-stone-700">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 