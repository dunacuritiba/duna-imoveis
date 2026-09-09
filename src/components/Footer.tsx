import React from 'react';
import { PROJECT_DETAILS } from '../data/residenceData';
import { ShieldCheck, MapPin, Phone, Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenBookDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenBookDownload }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A0D] text-[#8E9CA8] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Address (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl tracking-[0.2em] text-white uppercase font-light block">
                AURORA
              </span>
              <span className="text-xs tracking-[0.35em] text-[#C8A265] uppercase font-sans font-medium block -mt-1">
                Batel · Curitiba
              </span>
            </div>

            <p className="text-xs text-[#8E9CA8] font-light max-w-sm leading-relaxed">
              O mais exclusivo lançamento imobiliário de alto padrão de Curitiba. Apenas 14 residências
              suspensas, 1 por andar, no ponto mais nobre do Batel Soho.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-[#C5D0D9]">
                <MapPin className="w-4 h-4 text-[#C8A265] shrink-0 mt-0.5" />
                <span>{PROJECT_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#C5D0D9]">
                <Phone className="w-4 h-4 text-[#C8A265] shrink-0" />
                <span>(41) 3090-8800 · Concierge VIP Batel</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#C5D0D9]">
                <Mail className="w-4 h-4 text-[#C8A265] shrink-0" />
                <span>concierge@aurorabatel.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white font-medium block mb-2">
              Navegação
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#conceito" className="hover:text-[#DFBA73] transition-colors">
                  Filosofia Arquitetônica
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-[#DFBA73] transition-colors">
                  Maison, Garden & Penthouse
                </a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-[#DFBA73] transition-colors">
                  Sanctuary Spa & Wellness
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#DFBA73] transition-colors">
                  Batel Soho & Praça da Espanha
                </a>
              </li>
              <li>
                <a href="#personalizar" className="hover:text-[#DFBA73] transition-colors">
                  Personalizador de Plantas
                </a>
              </li>
              <li>
                <a href="#sustentabilidade" className="hover:text-[#DFBA73] transition-colors">
                  Sustentabilidade LEED Platinum
                </a>
              </li>
            </ul>
          </div>

          {/* VIP Services & Developer (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white font-medium block">
              Atendimento Private
            </span>
            <p className="text-xs text-[#8E9CA8] font-light leading-relaxed">
              Agende sua visita privada com hora marcada ao Sales Lounge & Apartamento Decorado no Batel.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2.5 bg-[#C8A265] text-[#0B0F12] text-xs uppercase tracking-wider font-semibold rounded-sm hover:brightness-110 transition-all text-center cursor-pointer"
              >
                Agendar Horário
              </button>
              <button
                onClick={onOpenBookDownload}
                className="px-4 py-2.5 border border-white/20 text-[#E8ECEF] text-xs uppercase tracking-wider rounded-sm hover:border-[#C8A265] hover:text-[#DFBA73] transition-all text-center cursor-pointer"
              >
                Baixar Book
              </button>
            </div>

            <div className="pt-2 text-[11px] text-[#788896]">
              <span>Realização: </span>
              <strong className="text-white">{PROJECT_DETAILS.developer}</strong>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Fake Notice */}
        <div className="pt-8 text-[10px] text-[#5A6773] space-y-2 leading-relaxed">
          <p>
            * Este projeto e empreendimento imobiliário são de caráter demonstrativo/conceitual (fake),
            criado como estudo de landing page moderna para empreendimentos de altíssimo luxo em Curitiba - PR.
            As ilustrações artísticas, perspectivas arquitetônicas, plantas e dimensões foram elaboradas com
            propósito de demonstração de design e experiência interativa de alta fidelidade.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <span>
              {PROJECT_DETAILS.registrationNumber} · {PROJECT_DETAILS.name} © 2026. Todos os direitos reservados.
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#DFBA73] hover:underline cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
