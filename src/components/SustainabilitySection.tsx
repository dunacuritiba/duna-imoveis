import React from 'react';
import { SUSTAINABILITY_SPECS } from '../data/residenceData';
import { Leaf, Zap, Droplets, Wind, ShieldCheck } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const icons = [Leaf, Wind, Zap, Droplets];

  return (
    <section id="sustentabilidade" className="py-24 bg-[#0B0F12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#81C784] font-medium block mb-3">
            Sustentabilidade & Engenharia Avançada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Curitiba em seu DNA: certificações de padrão mundial.
          </h2>
          <p className="text-[#8E9CA8] text-sm sm:text-base font-light">
            Edificado sob os mais rigorosos protocolos globais de eficiência energética, ar purificado
            e respeito ecológico às araucárias da capital paranaense.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SUSTAINABILITY_SPECS.map((spec, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-6 sm:p-7 bg-[#12171D] border border-white/10 hover:border-[#81C784]/50 rounded-sm transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-[#81C784]/10 border border-[#81C784]/30 flex items-center justify-center text-[#81C784] mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white font-light mb-3">
                  {spec.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9CA8] font-light leading-relaxed">
                  {spec.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Highlights Bar */}
        <div className="p-8 bg-[#12171D] border border-white/10 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
            <span className="font-serif text-3xl text-white block mb-1">100%</span>
            <span className="text-xs uppercase tracking-wider text-[#DFBA73] block mb-1">
              Gerador Total
            </span>
            <p className="text-[11px] text-[#8E9CA8]">
              Atende 100% dos apartamentos privativos (ar-condicionado, elevadores e tomadas).
            </p>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
            <span className="font-serif text-3xl text-white block mb-1">42 dB</span>
            <span className="text-xs uppercase tracking-wider text-[#DFBA73] block mb-1">
              Atenuação Acústica
            </span>
            <p className="text-[11px] text-[#8E9CA8]">
              Vidros insulados alemães Schüco e manta acústica em 100% das lajes.
            </p>
          </div>

          <div>
            <span className="font-serif text-3xl text-white block mb-1">Merv-13</span>
            <span className="text-xs uppercase tracking-wider text-[#DFBA73] block mb-1">
              Qualidade do Ar Interno
            </span>
            <p className="text-[11px] text-[#8E9CA8]">
              Filtragem contínua padrão hospitalar para retenção de alérgenos e poluentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
