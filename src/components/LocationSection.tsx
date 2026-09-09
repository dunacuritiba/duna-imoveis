import React, { useState } from 'react';
import { NEARBY_SPOTS, PROJECT_DETAILS } from '../data/residenceData';
import { NearbySpot } from '../types';
import { MapPin, Navigation, Clock, Utensils, ShoppingBag, Trees, HeartPulse, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'gastronomia' | 'luxo' | 'natureza' | 'conveniencia'>('all');
  const [activeSpot, setActiveSpot] = useState<NearbySpot>(NEARBY_SPOTS[0]);

  const filteredSpots =
    selectedCategory === 'all'
      ? NEARBY_SPOTS
      : NEARBY_SPOTS.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'gastronomia':
        return <Utensils className="w-3.5 h-3.5 text-[#C8A265]" />;
      case 'luxo':
        return <ShoppingBag className="w-3.5 h-3.5 text-[#DFBA73]" />;
      case 'natureza':
        return <Trees className="w-3.5 h-3.5 text-[#81C784]" />;
      case 'conveniencia':
        return <HeartPulse className="w-3.5 h-3.5 text-[#5CE1E6]" />;
      default:
        return <MapPin className="w-3.5 h-3.5 text-[#C8A265]" />;
    }
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-[#0B0F12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A265] font-medium block mb-2.5">
            Localização Incomparável · Batel Soho
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-snug sm:leading-tight mb-3 sm:mb-4 text-balance">
            No coração de Curitiba, com a elegância e leveza de viver a pé.
          </h2>
          <p className="text-[#8E9CA8] text-xs sm:text-base font-light leading-relaxed text-pretty">
            Situado no trecho mais arborizado e silencioso do Batel Soho, a passos da icônica Praça da Espanha,
            dos melhores bistrôs paranaenses e do Shopping Pátio Batel.
          </p>
        </div>

        {/* 2-Column: Interactive Curitiba Guide + Stylized Batel Radar Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Interactive Spot List (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0">
              {[
                { id: 'all', label: 'Todos os Pontos' },
                { id: 'gastronomia', label: 'Alta Gastronomia' },
                { id: 'luxo', label: 'Compras & Luxo' },
                { id: 'natureza', label: 'Parques & Clubes' },
                { id: 'conveniencia', label: 'Saúde & Educação' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                    selectedCategory === tab.id
                      ? 'bg-[#C8A265] text-[#0B0F12] font-semibold'
                      : 'bg-[#12171D] text-[#8E9CA8] border border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Spot Cards */}
            <div className="space-y-2.5 sm:space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {filteredSpots.map((spot, index) => {
                const isSelected = activeSpot.name === spot.name;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveSpot(spot)}
                    className={`p-3.5 sm:p-4 rounded-sm border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 ${
                      isSelected
                        ? 'bg-[#182027] border-[#C8A265] shadow-lg'
                        : 'bg-[#12171D] border-white/5 hover:border-white/20 hover:bg-[#151C22]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(spot.category)}
                        <h4 className="font-serif text-base sm:text-lg text-white font-normal">
                          {spot.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#8E9CA8] font-light leading-relaxed">{spot.description}</p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <span className="inline-block px-2.5 py-1 bg-[#0B0F12] border border-white/10 rounded-sm text-[11px] text-[#DFBA73] font-medium whitespace-nowrap">
                        {spot.timeWalkingOrDriving}
                      </span>
                      <span className="block text-[10px] text-[#788896] sm:mt-1">{spot.distance}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stylized Radar / Map Blueprint Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#12171D] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C8A265] font-medium flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" />
                  Epicentro Batel
                </span>
                <span className="text-[11px] text-[#788896]">Coordenadas: 25.4381° S, 49.2882° O</span>
              </div>

              <h3 className="font-serif text-2xl text-white font-light mb-2">
                {PROJECT_DETAILS.name}
              </h3>
              <p className="text-xs text-[#DFBA73] mb-6">{PROJECT_DETAILS.address}</p>

              {/* Stylized Batel Radar Map Illustration */}
              <div className="relative w-full h-56 rounded-sm bg-[#070A0D] border border-white/10 overflow-hidden flex items-center justify-center p-4">
                {/* Concentric distance circles */}
                <div className="absolute w-44 h-44 rounded-full border border-white/5 animate-pulse" />
                <div className="absolute w-32 h-32 rounded-full border border-[#C8A265]/20" />
                <div className="absolute w-16 h-16 rounded-full border border-[#C8A265]/40" />

                {/* Street axes */}
                <div className="absolute inset-x-0 h-px bg-white/10" />
                <div className="absolute inset-y-0 w-px bg-white/10" />
                <div className="absolute w-full h-px bg-[#C8A265]/20 rotate-45" />

                {/* Center Pin: AURORA Batel */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-[#DFBA73] flex items-center justify-center shadow-[0_0_15px_#DFBA73] animate-bounce">
                    <span className="w-2 h-2 rounded-full bg-[#0B0F12]" />
                  </div>
                  <span className="mt-1 text-[10px] uppercase font-bold text-white bg-black/80 px-2 py-0.5 rounded tracking-wider border border-[#C8A265]">
                    AURORA
                  </span>
                </div>

                {/* Pin labels */}
                <div className="absolute top-4 left-6 text-[9px] text-[#DFBA73] font-medium bg-[#12171D]/90 px-1.5 py-0.5 rounded border border-white/5">
                  Praça da Espanha (2 min)
                </div>
                <div className="absolute bottom-4 right-6 text-[9px] text-[#DFBA73] font-medium bg-[#12171D]/90 px-1.5 py-0.5 rounded border border-white/5">
                  Pátio Batel (3 min)
                </div>
                <div className="absolute top-6 right-6 text-[9px] text-[#81C784] font-medium bg-[#12171D]/90 px-1.5 py-0.5 rounded border border-white/5">
                  Parque Barigui (5 min)
                </div>
              </div>
            </div>

            {/* Spotlight info for active selected spot */}
            <div className="p-4 rounded-sm bg-[#0B0F12] border border-white/5">
              <span className="text-[10px] uppercase tracking-wider text-[#8E9CA8] block mb-1">
                Ponto em destaque:
              </span>
              <div className="flex items-center justify-between">
                <span className="text-sm font-serif text-white font-medium">
                  {activeSpot.name}
                </span>
                <span className="text-xs text-[#DFBA73] font-semibold">
                  {activeSpot.distance}
                </span>
              </div>
              <p className="text-xs text-[#8E9CA8] mt-1">{activeSpot.description}</p>
            </div>

            <a
              href="https://maps.google.com/?q=Batel+Soho+Curitiba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-widest border border-white/20 hover:border-[#C8A265] rounded-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Abrir Região no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C8A265]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
