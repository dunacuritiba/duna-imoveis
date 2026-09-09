import React from 'react';
import { Trees, VolumeX, Flame, KeyRound, Award, CheckCircle2 } from 'lucide-react';
import { PROJECT_DETAILS, ASSETS } from '../data/residenceData';

export const ConceptSection: React.FC = () => {
  const pillars = [
    {
      icon: Trees,
      title: 'Biofilia Paranaense & Araucárias',
      description:
        'Conexão visceral com o clima e a natureza de Curitiba. Jardins verticais irrigados automaticamente por águas pluviais e bosque privativo com 18 pinheiros centenários intocados.',
    },
    {
      icon: VolumeX,
      title: 'Acústica Alemã de Grau Estúdio',
      description:
        'Atenuação sonora de 42dB proporcionada por esquadrias Schüco com vidros laminados duplos e manta fonoabsorvente de 10mm sob todos os contrapisos.',
    },
    {
      icon: Flame,
      title: 'Conforto Térmico & Lareiras Ecológicas',
      description:
        'Piso aquecido setorizado com termostato digital touchscreen em todas as suítes e banheiros, garantindo clima perfeito nos invernos mais rigorosos de Curitiba.',
    },
    {
      icon: KeyRound,
      title: 'Privacidade & Blindagem Absoluta',
      description:
        '1 residência por andar. Elevador social pressurizado de alta velocidade com leitura biométrica e reconhecimento facial, sem contato físico com vizinhos.',
    },
  ];

  return (
    <section id="conceito" className="py-16 sm:py-24 bg-[#070A0D] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A265]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DFBA73]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[#C8A265] text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium mb-3">
            <span>Filosofia Arquitetônica</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-snug sm:leading-tight mb-4 sm:mb-6 text-balance">
            O encontro entre a nobreza de Curitiba e a vanguarda do design internacional.
          </h2>
          <p className="text-[#9BA7B3] text-sm sm:text-base md:text-lg font-light leading-relaxed text-pretty">
            O <strong className="text-white font-normal">AURORA Batel</strong> não foi concebido
            apenas como uma estrutura imobiliária, mas como um marco escultórico. Cada linha foi
            traçada para valorizar a luminosidade natural e resguardar a intimidade das famílias mais
            exigentes do Paraná.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Image + Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center mb-16 sm:mb-20">
          {/* Architectural Image */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            <img
              src={ASSETS.living}
              alt="Living integrado da Maison Suspensa com vista para Batel"
              referrerPolicy="no-referrer"
              className="w-full h-[280px] sm:h-[420px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B0F12] via-[#0B0F12]/70 to-transparent p-4 sm:p-6 lg:p-8">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#C8A265] block mb-1">
                Perspectiva Ilustrada
              </span>
              <p className="font-serif text-base sm:text-xl lg:text-2xl text-white font-light text-balance">
                Living monumental com lareira suspensa e abertura contínua de 14 metros para a varanda.
              </p>
            </div>
          </div>

          {/* Architectural Manifesto / Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-8 bg-[#12171D] border border-white/10 rounded-sm relative">
              <span className="font-serif text-5xl sm:text-6xl text-[#C8A265]/20 absolute -top-3 left-4 sm:left-6 select-none">
                “
              </span>
              <p className="font-serif text-base sm:text-xl lg:text-2xl text-[#E8ECEF] italic font-light leading-relaxed mb-4 sm:mb-6 pt-2 text-pretty">
                Curitiba possui uma personalidade arquitetônica singular: exigente, refinada e em
                harmonia com o verde. Criamos residências com a alma de uma casa de campo e o
                horizonte de um belvedere suspenso no Batel Soho.
              </p>
              <div>
                <span className="text-xs sm:text-sm font-medium text-white block">
                  {PROJECT_DETAILS.architect}
                </span>
                <span className="text-[10px] sm:text-xs text-[#8E9CA8] uppercase tracking-wider block">
                  Projeto Arquitetônico e Concepção
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 bg-[#12171D]/60 border border-white/5 rounded-sm">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9CA8] block mb-1">
                  Paisagismo
                </span>
                <span className="text-xs sm:text-sm text-white font-medium">{PROJECT_DETAILS.landscaping}</span>
              </div>
              <div className="p-3.5 sm:p-4 bg-[#12171D]/60 border border-white/5 rounded-sm">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9CA8] block mb-1">
                  Design de Interiores
                </span>
                <span className="text-xs sm:text-sm text-white font-medium">
                  {PROJECT_DETAILS.interiorDesign}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#12171D] hover:bg-[#182027] border border-white/10 hover:border-[#C8A265]/50 p-5 sm:p-7 rounded-sm transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-[#C8A265]/10 border border-[#C8A265]/30 flex items-center justify-center text-[#DFBA73] mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-light mb-2 sm:mb-3 group-hover:text-[#F3DEAC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E9CA8] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
