
import { useState } from 'react';
import { cn } from '@/lib/utils';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Technology Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    title: 'Digital Literacy Program'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    title: 'Women Empowerment'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Education Initiative'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Community Event'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    title: 'Health Camp'
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-ngo-secondary mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Glimpses of our work and the impact we've created in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setActiveImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {activeImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[activeImage].url} 
                alt={galleryImages[activeImage].title} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => setActiveImage(null)}
                  className="bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-bold">{galleryImages[activeImage].title}</h3>
              </div>
              
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(activeImage === 0 ? galleryImages.length - 1 : activeImage - 1);
                  }}
                  className="bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(activeImage === galleryImages.length - 1 ? 0 : activeImage + 1);
                  }}
                  className="bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
