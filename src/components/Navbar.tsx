import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Download } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/residenceData';

interface NavbarProps {
  onOpenBooking: (unitId?: string) => void;
  onOpenBookDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenBookDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Conceito', href: '#conceito' },
    { name: 'Unidades', href: '#plantas' },
    { name: 'Wellness & Spa', href: '#lazer' },
    { name: 'Batel Soho', href: '#localizacao' },
    { name: 'Sustentavel', href: '#sustentabilidade' },
    { name: 'Único', href: '#personalizar' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F12]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0F12]/95 via-[#0B0F12]/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="group flex flex-col items-start focus:outline-none shrink-0"
        >
          <span className="font-serif text-xl sm:text-2xl xl:text-3xl tracking-[0.2em] sm:tracking-[0.25em] text-white group-hover:text-[#DFBA73] transition-colors uppercase font-light whitespace-nowrap leading-none">
            AURORA
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.28em] sm:tracking-[0.32em] text-[#C8A265] borderLeft-[20px] uppercase font-sans font-medium mt-1 whitespace-nowrap leading-none">
            Batel · Curitiba
          </span>
        </a>

        {/* Desktop Nav Links (visible on lg and above, with fluid gaps and no-wrap) */}
        <nav
          id="desktop-navigation"
          aria-label="Navegação Principal"
          className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7 shrink min-w-0"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] xl:text-xs uppercase tracking-[0.12em] xl:tracking-[0.16em] font-medium text-[#A0ABB6] hover:text-[#DFBA73] transition-colors duration-200 py-1 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
          {/* Secondary CTA: Baixar Book (shown on xl+ screens where full width is guaranteed) */}
          <button
            id="nav-book-download-btn"
            onClick={onOpenBookDownload}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.14em] text-[#C8A265] border border-[#C8A265]/40 hover:border-[#C8A265] hover:bg-[#C8A265]/10 rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar Book</span>
          </button>

          {/* Primary CTA: Agendar Visita (responsive: full on sm+, compact on mobile) */}
          <button
            id="nav-schedule-visit-btn"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#0B0F12] bg-gradient-to-r from-[#DFBA73] to-[#C8A265] hover:brightness-110 rounded-sm transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>Agendar Visita</span>
          </button>

          {/* Mobile-only CTA */}
          <button
            id="nav-mobile-visit-btn"
            onClick={() => onOpenBooking()}
            className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#0B0F12] bg-[#C8A265] rounded-sm whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3 h-3" />
            <span>Visita</span>
          </button>

          {/* Mobile/Tablet Menu Trigger (visible on < lg screens) */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E8ECEF] hover:text-[#C8A265] focus:outline-none cursor-pointer rounded-sm hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#0B0F12]/98 backdrop-blur-xl border-b border-white/10 px-5 sm:px-6 py-6 transition-all animate-fade-in shadow-2xl"
        >
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A265] font-semibold">
              Navegação
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs sm:text-sm uppercase tracking-[0.16em] text-[#C5D0D9] hover:text-[#DFBA73] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5 sm:gap-3">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookDownload();
                }}
                className="w-full py-3 text-xs uppercase tracking-widest text-[#C8A265] border border-[#C8A265]/40 rounded-sm text-center hover:bg-[#C8A265]/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar Book Arquitetônico (PDF)</span>
              </button>

              <button
                id="mobile-drawer-visit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#0B0F12] bg-[#C8A265] hover:brightness-110 rounded-sm text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Visita ao Lounge Batel</span>
              </button>
            </div>

            <div className="pt-2 text-[10px] sm:text-[11px] text-[#788896] text-center">
              Lounge exclusivo: {PROJECT_DETAILS.address}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
