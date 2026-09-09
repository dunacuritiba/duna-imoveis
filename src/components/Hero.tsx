import React from 'react';
import { ChevronDown, Sparkles, ShieldCheck, MapPin, Maximize2, Compass } from 'lucide-react';
import { ASSETS, PROJECT_DETAILS } from '../data/residenceData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenBookDownload: () => void;
  onOpenGallery: (imageIndex?: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenBookDownload,
  onOpenGallery,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[100vh] flex flex-col justify-between overflow-hidden pt-28 pb-12"
    >
      {/* Background Image Container with Gradient Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={ASSETS.facade}
          alt="Fachada imponente do AURORA Batel em Curitiba"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in duration-1000 filter brightness-[0.62] contrast-[1.08]"
        />
        {/* Cinematic Vignettes and Dark Linear Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] via-[#0B0F12]/40 to-[#0B0F12]/80" />
        <div className="absolute inset-0 bg-radial-at-center from-transparent via-[#0B0F12]/40 to-[#0B0F12]/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl">
          {/* Subtle Location & Status Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12171D]/90 backdrop-blur-md border border-[#C8A265]/30 mb-4 sm:mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#C8A265] animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#DFBA73] font-medium truncate">
              Lançamento Oficial · Batel Soho, Curitiba
            </span>
          </div>

          {/* Master Headline with fluid responsive typography */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.12] sm:leading-[1.08] tracking-tight mb-4 sm:mb-6 text-balance">
            A mais pura expressão da{' '}
            <span className="italic font-normal text-[#F3DEAC]">
              arquitetura suspensa
            </span>{' '}
            no Batel.
          </h1>

          {/* Subtitle with balanced text width */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B9C4CE] font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl text-pretty">
            Apenas 14 residências exclusivas de 342 a 685 m² privativos, com 1 unidade por andar,
            piscina aquecida privativa na varanda e vista contemplativa para as araucárias centenárias
            de Curitiba.
          </p>

          {/* Actions - fluid stacked on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <button
              id="hero-schedule-primary-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 text-xs uppercase tracking-[0.18em] font-semibold text-[#0B0F12] bg-gradient-to-r from-[#DFBA73] via-[#C8A265] to-[#B38D4F] hover:brightness-110 shadow-[0_0_30px_rgba(200,162,101,0.25)] rounded-sm transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Agendar Apresentação Exclusiva</span>
              <Sparkles className="w-4 h-4 text-[#0B0F12] group-hover:rotate-12 transition-transform shrink-0" />
            </button>

            <button
              id="hero-download-book-btn"
              onClick={onOpenBookDownload}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 text-xs uppercase tracking-[0.18em] text-[#E8ECEF] bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#C8A265]/60 backdrop-blur-md rounded-sm transition-all text-center cursor-pointer"
            >
              Baixar Book Digital (PDF)
            </button>

            <button
              id="hero-preview-gallery-btn"
              onClick={() => onOpenGallery(0)}
              className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#A0ABB6] hover:text-[#C8A265] px-3 py-3 transition-colors cursor-pointer"
              title="Expandir Imagens de Alta Resolução"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Ver Galeria 4K</span>
            </button>
          </div>
        </div>

        {/* Quick Metrics Bar with fluid responsive grid */}
        <div
          id="hero-metrics-bar"
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-4 sm:pt-6 border-t border-white/15 max-w-5xl"
        >
          <div className="bg-[#12171D]/75 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-sm flex flex-col justify-between">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#8E9CA8] mb-1">
              Metragens Privativas
            </span>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light">
              342 a 685 <span className="text-xs sm:text-sm font-sans text-[#C8A265]">m²</span>
            </span>
          </div>

          <div className="bg-[#12171D]/75 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-sm flex flex-col justify-between">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#8E9CA8] mb-1">
              Exclusividade
            </span>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light">
              1 <span className="text-xs sm:text-sm font-sans text-[#C8A265]">por andar</span>
            </span>
          </div>

          <div className="bg-[#12171D]/75 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-sm flex flex-col justify-between">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#8E9CA8] mb-1">
              Dormitórios & Vagas
            </span>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light">
              4 ou 5 <span className="text-xs sm:text-sm font-sans text-[#C8A265]">suítes</span>
            </span>
          </div>

          <div className="bg-[#12171D]/75 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-sm flex flex-col justify-between">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#8E9CA8] mb-1">
              Endereço Nobre
            </span>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light">
              Batel Soho
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Bar with Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-[#788896] text-xs pt-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C8A265]" />
          <span>Obra com Patrimônio de Afetação e Incorporação Registrada</span>
        </div>

        <a
          href="#conceito"
          className="hidden sm:flex items-center gap-2 hover:text-[#C8A265] transition-colors py-1"
        >
          <span>Conheça os detalhes</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
