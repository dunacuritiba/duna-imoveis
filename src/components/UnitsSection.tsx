import React, { useState } from 'react';
import { UNITS } from '../data/residenceData';
import { FloorplanSvg } from './FloorplanSvg';
import {
  BedDouble,
  Car,
  Maximize,
  Layers,
  Sparkles,
  Download,
  Calendar,
  CheckCircle2,
  Eye,
} from 'lucide-react';

interface UnitsSectionProps {
  onSelectUnitForBooking: (unitId: string) => void;
  onOpenBookDownload: () => void;
  onOpenGallery: (imageIndex?: number) => void;
}

export const UnitsSection: React.FC<UnitsSectionProps> = ({
  onSelectUnitForBooking,
  onOpenBookDownload,
  onOpenGallery,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(UNITS[0].id);
  const [viewMode, setViewMode] = useState<'render' | 'floorplan'>('render');

  const currentUnit = UNITS.find((u) => u.id === selectedUnitId) || UNITS[0];

  return (
    <section id="plantas" className="py-24 bg-[#0B0F12] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A265] font-medium block mb-3">
            Tipologias & Residências Suspensas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Plantas livres de pilares, desenhadas para horizontes infinitos.
          </h2>
          <p className="text-sm sm:text-base text-[#8E9CA8] font-light">
            Selecione a tipologia desejada para explorar os detalhes arquitetônicos,
            especificações de materiais nobres e a planta técnica.
          </p>
        </div>

        {/* Typology Selector Tabs - clean scroll on mobile, centered on desktop */}
        <div className="flex items-stretch justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {UNITS.map((unit) => {
            const isSelected = unit.id === selectedUnitId;
            return (
              <button
                key={unit.id}
                id={`unit-tab-${unit.id}`}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`px-4 sm:px-6 py-3 rounded-sm text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex flex-col sm:flex-row items-center gap-1 sm:gap-2.5 shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#182027] border border-[#C8A265] text-[#DFBA73] shadow-[0_0_20px_rgba(200,162,101,0.15)] font-semibold'
                    : 'bg-[#12171D] border border-white/10 text-[#8E9CA8] hover:text-white hover:border-white/30'
                }`}
              >
                <span className="whitespace-nowrap">{unit.name}</span>
                <span className="text-[10px] sm:text-[11px] font-sans font-normal opacity-80 whitespace-nowrap">
                  ({unit.areaPrivativa} m²)
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Unit Showcase Card */}
        <div className="bg-[#12171D] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
          {/* Unit Top Bar */}
          <div className="p-5 sm:p-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-5 bg-[#151C22]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C8A265]/10 border border-[#C8A265]/30 text-[#DFBA73] text-[10px] sm:text-[11px] uppercase tracking-widest font-medium mb-2">
                <Sparkles className="w-3 h-3" />
                <span>{currentUnit.badge}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light">
                {currentUnit.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#DFBA73] italic font-serif mt-1 text-pretty">
                “{currentUnit.tagline}”
              </p>
            </div>

            {/* Quick Specs Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
              <div className="p-2.5 sm:p-3 bg-[#0B0F12]/60 border border-white/5 rounded-sm flex flex-col justify-center">
                <Maximize className="w-4 h-4 text-[#C8A265] mx-auto mb-1" />
                <span className="text-[9px] sm:text-[10px] text-[#8E9CA8] uppercase block">Área Privativa</span>
                <span className="font-serif text-base sm:text-lg text-white font-light">
                  {currentUnit.areaPrivativa} m²
                </span>
              </div>

              <div className="p-2.5 sm:p-3 bg-[#0B0F12]/60 border border-white/5 rounded-sm flex flex-col justify-center">
                <BedDouble className="w-4 h-4 text-[#C8A265] mx-auto mb-1" />
                <span className="text-[9px] sm:text-[10px] text-[#8E9CA8] uppercase block">Suítes</span>
                <span className="font-serif text-base sm:text-lg text-white font-light">
                  {currentUnit.suites} Suítes
                </span>
              </div>

              <div className="p-2.5 sm:p-3 bg-[#0B0F12]/60 border border-white/5 rounded-sm flex flex-col justify-center">
                <Car className="w-4 h-4 text-[#C8A265] mx-auto mb-1" />
                <span className="text-[9px] sm:text-[10px] text-[#8E9CA8] uppercase block">Vagas</span>
                <span className="font-serif text-base sm:text-lg text-white font-light">
                  {currentUnit.vagas} vagas
                </span>
              </div>

              <div className="p-2.5 sm:p-3 bg-[#0B0F12]/60 border border-white/5 rounded-sm flex flex-col justify-center">
                <Layers className="w-4 h-4 text-[#C8A265] mx-auto mb-1" />
                <span className="text-[9px] sm:text-[10px] text-[#8E9CA8] uppercase block">Pavimento</span>
                <span className="font-serif text-xs text-white font-light mt-0.5 block truncate">
                  {currentUnit.andar}
                </span>
              </div>
            </div>
          </div>

          {/* Main Unit Body: Interactive View Toggle & Media */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Media Container (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {/* View mode toggle switch */}
              <div className="flex flex-col xs:flex-row sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="text-[11px] uppercase tracking-widest text-[#8E9CA8]">
                  Modo de Visualização:
                </span>
                <div className="inline-flex rounded-sm bg-[#0B0F12] p-1 border border-white/10 w-full sm:w-auto">
                  <button
                    onClick={() => setViewMode('render')}
                    className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5 ${
                      viewMode === 'render'
                        ? 'bg-[#C8A265] text-[#0B0F12] font-semibold'
                        : 'text-[#8E9CA8] hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">Perspectiva</span>
                  </button>
                  <button
                    onClick={() => setViewMode('floorplan')}
                    className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5 ${
                      viewMode === 'floorplan'
                        ? 'bg-[#C8A265] text-[#0B0F12] font-semibold'
                        : 'text-[#8E9CA8] hover:text-white'
                    }`}
                  >
                    <Maximize className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">Planta Baixa</span>
                  </button>
                </div>
              </div>

              {/* View Render / SVG */}
              <div className="relative min-h-[300px] sm:min-h-[420px] rounded-sm overflow-hidden border border-white/10 bg-[#070A0D] flex items-center justify-center">
                {viewMode === 'render' ? (
                  <div className="w-full h-full relative group">
                    <img
                      src={currentUnit.image}
                      alt={`Render da unidade ${currentUnit.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-[300px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                    />
                    <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#0B0F12]/85 backdrop-blur-md px-3 py-1.5 text-[10px] sm:text-[11px] text-[#DFBA73] rounded-sm border border-white/10">
                      Perspectiva artística do living e integração externa
                    </div>
                  </div>
                ) : (
                  <div className="w-full p-2 overflow-x-auto">
                    <FloorplanSvg
                      type={
                        currentUnit.id === 'garden-residence'
                          ? 'garden'
                          : currentUnit.id === 'sky-penthouse'
                          ? 'penthouse'
                          : 'maison'
                      }
                    />
                  </div>
                )}
              </div>

              {/* Action Under Floorplan */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] text-[#8E9CA8]">
                <span>* Planta flexível personalizável pela engenharia interna.</span>
                <button
                  onClick={onOpenBookDownload}
                  className="text-[#DFBA73] hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar planta em alta resolução (PDF)</span>
                </button>
              </div>
            </div>

            {/* Specifications & Diferenciais (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C8A265] font-medium mb-2.5">
                  Descrição & Diferenciais Exclusivos
                </h4>
                <p className="text-xs sm:text-sm text-[#B9C4CE] font-light leading-relaxed mb-5 text-pretty">
                  {currentUnit.description}
                </p>

                {/* Specs list */}
                <div className="bg-[#0B0F12]/60 rounded-sm p-3.5 sm:p-4 border border-white/5 space-y-2 mb-5 text-xs">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#8E9CA8]">Pé-direito:</span>
                    <span className="text-white font-medium">{currentUnit.specs.peDireito}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#8E9CA8]">Living Integrado:</span>
                    <span className="text-white font-medium">{currentUnit.specs.livingIntegrado}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#8E9CA8]">Varanda Gourmet:</span>
                    <span className="text-white font-medium">{currentUnit.specs.varandaGourmet}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#8E9CA8]">Piscina Privativa:</span>
                    <span className="text-[#5CE1E6] font-medium">{currentUnit.specs.piscinaPrivativa}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#8E9CA8]">Adega Climatizada:</span>
                    <span className="text-white font-medium">{currentUnit.specs.adega}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8E9CA8]">Acústica:</span>
                    <span className="text-white font-medium">{currentUnit.specs.isolamentoAcustico}</span>
                  </div>
                </div>

                {/* Diferenciais bullets */}
                <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8E9CA8] font-medium mb-2.5">
                  Itens Inclusos no Memorial Descritivo:
                </h4>
                <ul className="space-y-2 mb-5">
                  {currentUnit.diferenciais.slice(0, 4).map((dif, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#C5D0D9] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A265] shrink-0 mt-0.5" />
                      <span>{dif}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to action for this unit */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  id={`unit-schedule-btn-${currentUnit.id}`}
                  onClick={() => onSelectUnitForBooking(currentUnit.name)}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#DFBA73] to-[#C8A265] text-[#0B0F12] text-xs uppercase tracking-wider font-semibold hover:brightness-110 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="truncate">Solicitar Memorial & Valores desta Unidade</span>
                </button>

                <p className="text-[10px] sm:text-[11px] text-[#788896] text-center">
                  Atendimento discreto com diretor comercial e concierge imobiliário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
