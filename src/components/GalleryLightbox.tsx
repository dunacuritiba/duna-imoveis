import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/residenceData';

interface GalleryLightboxProps {
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  initialIndex = 0,
  isOpen,
  onClose,
}) => {
  const images = [
    {
      url: ASSETS.facade,
      title: 'Fachada Arquitetônica Contemporânea',
      subtitle: 'Batel Soho · Curitiba',
      details: 'Concreto aparente, brises amadeirados e floreiras suspensas emolduradas pelas araucárias nativas.',
    },
    {
      url: ASSETS.living,
      title: 'Living Integrado & Varanda com Piscina Privativa',
      subtitle: 'Maison Suspensa · 342 m²',
      details: 'Pé-direito livre de 3.10m, piso em mármore Michelangelo Nuvolato e lareira suspensa a bioetanol.',
    },
    {
      url: ASSETS.spa,
      title: 'Sanctuary Spa & Piscina Semiolímpica Coberta',
      subtitle: 'Área Comum Exclusiva',
      details: 'Piscina aquecida a 32°C com revestimento em pedra vulcânica hijau, sauna seca em cedro e crioterapia.',
    },
    {
      url: ASSETS.suite,
      title: 'Suíte Master com Sacada & Closet Sr. e Sra.',
      subtitle: 'Residência Privativa',
      details: 'Vidros duplos de controle acústico de 42dB, piso aquecido e banheira de imersão esculpida.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const activeImg = images[currentIndex] || images[0];

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl animate-fade-in p-4 sm:p-6"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between z-20 pb-4 border-b border-white/10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A265] font-medium block">
            Galeria de Alta Resolução 4K
          </span>
          <h3 className="font-serif text-lg sm:text-xl text-white font-light">
            {activeImg.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-[#C8A265] hover:text-[#0B0F12] text-white transition-colors cursor-pointer"
          title="Fechar Galeria"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-auto overflow-hidden py-4">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-[#C8A265] hover:text-black text-white border border-white/10 transition-all cursor-pointer"
          aria-label="Imagem Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="max-w-6xl max-h-[72vh] w-full flex items-center justify-center">
          <img
            src={activeImg.url}
            alt={activeImg.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-sm border border-white/10 shadow-2xl transition-all duration-300"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-[#C8A265] hover:text-black text-white border border-white/10 transition-all cursor-pointer"
          aria-label="Próxima Imagem"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Bar & Thumbnails */}
      <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
        <div className="text-center sm:text-left">
          <span className="text-xs text-[#DFBA73] font-medium block">
            {activeImg.subtitle}
          </span>
          <p className="text-xs text-[#8E9CA8] max-w-xl font-light">
            {activeImg.details}
          </p>
        </div>

        {/* Thumbnails */}
        <div className="flex items-center gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-12 rounded-sm overflow-hidden border transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'border-[#C8A265] ring-2 ring-[#C8A265]/40 scale-105'
                  : 'border-white/20 opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
