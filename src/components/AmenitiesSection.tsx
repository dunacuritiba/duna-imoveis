import React, { useState } from 'react';
import { AMENITIES } from '../data/residenceData';
import { Amenity } from '../types';
import { Sparkles, Check, ChevronRight, X, Waves, Dumbbell, Wine, Shield, Compass } from 'lucide-react';

interface AmenitiesSectionProps {
  onOpenBooking: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'wellness' | 'social' | 'esportes' | 'servicos'>('all');
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

  const filteredAmenities =
    activeCategory === 'all'
      ? AMENITIES
      : AMENITIES.filter((a) => a.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos os Ambientes' },
    { id: 'wellness', label: 'Wellness & Spa' },
    { id: 'social', label: 'Cave & Experiências' },
    { id: 'esportes', label: 'Esportes & Performance' },
    { id: 'servicos', label: 'Concierge & Segurança' },
  ];

  return (
    <section id="lazer" className="py-16 sm:py-24 bg-[#070A0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A265] font-medium block mb-2.5">
            Wellness Club & Private Amenities
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-snug sm:leading-tight mb-3 sm:mb-4 text-balance">
            Um resort privativo de longevidade e bem-estar no coração de Curitiba.
          </h2>
          <p className="text-[#8E9CA8] text-xs sm:text-base font-light leading-relaxed text-pretty">
            Áreas sociais concebidas como extensão natural das residências, integrando silêncio acústico,
            materiais nobres e atendimento no padrão hoteleiro 6 estrelas.
          </p>
        </div>

        {/* Filter Pills - horizontal scrollable on mobile, wrapped on desktop */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none sm:flex-wrap mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#DFBA73] text-[#0B0F12] font-semibold shadow-md'
                  : 'bg-[#12171D] text-[#8E9CA8] border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              onClick={() => setSelectedAmenity(amenity)}
              className="group bg-[#12171D] rounded-sm overflow-hidden border border-white/10 hover:border-[#C8A265]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12171D] via-transparent to-black/30" />
                <span className="absolute top-3 right-3 bg-[#0B0F12]/85 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#DFBA73] rounded-sm border border-white/10">
                  {amenity.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-light mb-1.5 group-hover:text-[#F3DEAC] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-[#8E9CA8] line-clamp-2 font-light leading-relaxed mb-4">
                    {amenity.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#C8A265] group-hover:text-[#DFBA73]">
                  <span className="font-medium tracking-wider text-[11px] sm:text-xs">Ver Especificações</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with VIP Consultation */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 bg-gradient-to-r from-[#12171D] via-[#182027] to-[#12171D] rounded-sm border border-[#C8A265]/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-light text-balance">
              Deseja conhecer o projeto detalhado dos espaços de lazer?
            </h4>
            <p className="text-xs sm:text-sm text-[#8E9CA8] text-pretty">
              Agende uma visita guiada em maquete física e realidade virtual no lounge de atendimento.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-widest font-semibold bg-[#C8A265] text-[#0B0F12] hover:brightness-110 rounded-sm shrink-0 transition-all cursor-pointer text-center"
          >
            Agendar no Lounge Batel
          </button>
        </div>
      </div>

      {/* Amenity Detail Modal */}
      {selectedAmenity && (
        <div
          id="amenity-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedAmenity(null)}
        >
          <div
            className="bg-[#12171D] border border-[#C8A265]/40 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAmenity(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C8A265] hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-52 sm:h-64">
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12171D] via-transparent to-black/40" />
              <div className="absolute bottom-3 left-4 sm:left-6">
                <span className="text-[10px] uppercase tracking-widest text-[#C8A265] font-semibold block mb-1">
                  {selectedAmenity.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
                  {selectedAmenity.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-8 space-y-4 sm:space-y-5">
              <p className="text-xs sm:text-sm text-[#DFBA73] font-serif italic text-pretty">
                “{selectedAmenity.subtitle}”
              </p>
              <p className="text-xs sm:text-sm text-[#B9C4CE] font-light leading-relaxed text-pretty">
                {selectedAmenity.description}
              </p>

              <div>
                <h5 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#8E9CA8] font-medium mb-2.5">
                  Destaques Técnicos:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {selectedAmenity.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#E8ECEF]">
                      <Check className="w-3.5 h-3.5 text-[#C8A265] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedAmenity(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-[#C8A265] text-[#0B0F12] text-xs uppercase tracking-wider font-semibold rounded-sm hover:brightness-110 transition-all cursor-pointer text-center"
                >
                  Consultar Disponibilidade de Visita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
