import React, { useState } from 'react';
import { Sliders, Check, Sparkles, Send, FileText, Wine, Car, Shield, Compass } from 'lucide-react';

interface UnitCustomizerProps {
  onOpenBookingWithDetails: (customSummary: string) => void;
}

export const UnitCustomizer: React.FC<UnitCustomizerProps> = ({ onOpenBookingWithDetails }) => {
  const [floorHeight, setFloorHeight] = useState<'intermediario' | 'alto' | 'cobertura'>('alto');
  const [layoutChoice, setLayoutChoice] = useState<'4suites' | 'office' | 'masterDupla'>('4suites');
  const [stoneFinishing, setStoneFinishing] = useState<'michelangelo' | 'travertino'>('michelangelo');
  const [cellarSize, setCellarSize] = useState<'120' | '250'>('120');
  const [evCharger, setEvCharger] = useState<boolean>(true);

  const getLayoutTitle = () => {
    switch (layoutChoice) {
      case '4suites':
        return '4 Suítes com Living Integrado de 98m²';
      case 'office':
        return '3 Suítes + Home Office Acústico Privativo';
      case 'masterDupla':
        return 'Suíte Master Presidencial Estendida (62m²) + 2 Suítes';
    }
  };

  const handleGenerateDossier = () => {
    const summary = `Unidade Pavimento ${floorHeight.toUpperCase()} | Layout: ${getLayoutTitle()} | Acabamento: Mármore ${stoneFinishing === 'michelangelo' ? 'Michelangelo Nuvolato (PR)' : 'Travertino Navona'} | Adega: ${cellarSize} Garrafas | Carregador EV: ${evCharger ? 'Incluso 22kW' : 'Padrão'}`;
    onOpenBookingWithDetails(summary);
  };

  return (
    <section id="personalizar" className="py-16 sm:py-24 bg-[#070A0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C8A265] font-medium block mb-2.5">
            Engenharia & Personalização Customizada
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-snug sm:leading-tight mb-3 sm:mb-4 text-balance">
            Configure a planta e os acabamentos sob medida para a sua família.
          </h2>
          <p className="text-[#8E9CA8] text-xs sm:text-base font-light leading-relaxed text-pretty">
            No AURORA Batel, a equipe de engenharia e arquitetura de interiores adapta a distribuição
            das paredes internas e as instalações hidráulicas e de automação antes da entrega da laje.
          </p>
        </div>

        {/* Customizer Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Options Form (8 cols) */}
          <div className="lg:col-span-8 bg-[#12171D] border border-white/10 rounded-sm p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 shadow-xl">
            {/* 1. Pavimento / Altura */}
            <div>
              <label className="text-[11px] sm:text-xs uppercase tracking-widest text-[#DFBA73] font-medium block mb-2.5 sm:mb-3">
                1. Pavimento de Preferência:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { id: 'intermediario', label: 'Pavimento 4º ao 8º', desc: 'Vista arborizada para as copas' },
                  { id: 'alto', label: 'Pavimento 9º ao 13º', desc: 'Horizonte livre sobre o Batel' },
                  { id: 'cobertura', label: 'Penthouse Triplex (14º+)', desc: 'Vista 360° Serra do Mar' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFloorHeight(item.id as any)}
                    className={`p-3 sm:p-4 rounded-sm text-left border transition-all cursor-pointer ${
                      floorHeight === item.id
                        ? 'bg-[#182027] border-[#C8A265] text-white'
                        : 'bg-[#0B0F12] border-white/5 text-[#8E9CA8] hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-semibold block text-white mb-0.5">{item.label}</span>
                    <span className="text-[11px] text-[#8E9CA8] block leading-snug">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Distribuição da Planta */}
            <div>
              <label className="text-[11px] sm:text-xs uppercase tracking-widest text-[#DFBA73] font-medium block mb-2.5 sm:mb-3">
                2. Distribuição da Planta Interna:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  {
                    id: '4suites',
                    title: '4 Suítes Plenas',
                    desc: 'Máxima capacidade para acomodar filhos e hóspedes com total privacidade.',
                  },
                  {
                    id: 'office',
                    title: '3 Suítes + Home Office',
                    desc: 'Escritório executivo com isolamento acústico dedicado voltado para a varanda.',
                  },
                  {
                    id: 'masterDupla',
                    title: 'Suíte Presidencial 62m²',
                    desc: 'Dois banheiros senhor e senhora, dois closets walk-in e 2 suítes secundárias.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLayoutChoice(item.id as any)}
                    className={`p-3 sm:p-4 rounded-sm text-left border transition-all cursor-pointer ${
                      layoutChoice === item.id
                        ? 'bg-[#182027] border-[#C8A265] text-white'
                        : 'bg-[#0B0F12] border-white/5 text-[#8E9CA8] hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-semibold block text-white mb-0.5">{item.title}</span>
                    <span className="text-[11px] text-[#8E9CA8] block leading-snug">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Revestimentos Nobres & Adega */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Mármores */}
              <div>
                <label className="text-[11px] sm:text-xs uppercase tracking-widest text-[#DFBA73] font-medium block mb-2.5 sm:mb-3">
                  3. Mármore dos Banhos & Lareira:
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'michelangelo', label: 'Michelangelo Nuvolato', sub: 'Mármore nobre do Paraná' },
                    { id: 'travertino', label: 'Travertino Navona Importado', sub: 'Elegância clássica italiana' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setStoneFinishing(m.id as any)}
                      className={`w-full p-3 rounded-sm text-left border flex items-center justify-between cursor-pointer ${
                        stoneFinishing === m.id
                          ? 'bg-[#182027] border-[#C8A265] text-white'
                          : 'bg-[#0B0F12] border-white/5 text-[#8E9CA8]'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-medium block text-white">{m.label}</span>
                        <span className="text-[10px] text-[#8E9CA8]">{m.sub}</span>
                      </div>
                      {stoneFinishing === m.id && <Check className="w-4 h-4 text-[#C8A265] shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Adega */}
              <div>
                <label className="text-[11px] sm:text-xs uppercase tracking-widest text-[#DFBA73] font-medium block mb-2.5 sm:mb-3">
                  4. Capacidade da Adega Privativa:
                </label>
                <div className="space-y-2">
                  {[
                    { id: '120', label: 'Adega 120 Rótulos', sub: 'Climatizada bi-zone (inclusa)' },
                    { id: '250', label: 'Adega Expandida 250 Rótulos', sub: 'Cave estendida com sommelier app' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCellarSize(c.id as any)}
                      className={`w-full p-3 rounded-sm text-left border flex items-center justify-between cursor-pointer ${
                        cellarSize === c.id
                          ? 'bg-[#182027] border-[#C8A265] text-white'
                          : 'bg-[#0B0F12] border-white/5 text-[#8E9CA8]'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-medium block text-white">{c.label}</span>
                        <span className="text-[10px] text-[#8E9CA8]">{c.sub}</span>
                      </div>
                      {cellarSize === c.id && <Check className="w-4 h-4 text-[#C8A265] shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Carregador Elétrico */}
            <div className="p-3.5 sm:p-4 bg-[#0B0F12] rounded-sm border border-white/5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-[#C8A265] shrink-0" />
                <div>
                  <span className="text-xs font-medium text-white block">
                    Carregador Rápido de Veículo Elétrico (22kW individual)
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#8E9CA8] leading-tight block">
                    Instalação no box privativo conectada ao medidor da unidade
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={evCharger}
                onChange={(e) => setEvCharger(e.target.checked)}
                className="w-5 h-5 accent-[#C8A265] cursor-pointer shrink-0"
              />
            </div>
          </div>

          {/* Real-time Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#151C22] border border-[#C8A265]/40 rounded-sm p-5 sm:p-7 space-y-5 lg:sticky lg:top-28 shadow-2xl">
            <div className="border-b border-white/10 pb-3">
              <span className="text-[10px] uppercase tracking-widest text-[#DFBA73] font-semibold block mb-1">
                Resumo da Sua Configuração
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
                Residência Sob Medida
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8E9CA8]">Pavimento:</span>
                <span className="text-white font-medium capitalize">
                  {floorHeight === 'cobertura' ? 'Triplex Cobertura' : `Andar ${floorHeight}`}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8E9CA8]">Layout:</span>
                <span className="text-white font-medium text-right max-w-[170px] truncate">
                  {getLayoutTitle()}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8E9CA8]">Mármore:</span>
                <span className="text-white font-medium">
                  {stoneFinishing === 'michelangelo' ? 'Michelangelo (PR)' : 'Travertino Romano'}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8E9CA8]">Adega Privativa:</span>
                <span className="text-white font-medium">{cellarSize} Garrafas</span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#8E9CA8]">Wallbox EV:</span>
                <span className="text-[#5CE1E6] font-medium">
                  {evCharger ? 'Incluso (22kW)' : 'Não'}
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#0B0F12] rounded-sm border border-white/5 text-[11px] text-[#B9C4CE] space-y-1">
              <span className="text-[#DFBA73] font-semibold block">Disponibilidade:</span>
              <p className="leading-snug">Apenas 4 unidades disponíveis nesta faixa de pavimento e configuração.</p>
            </div>

            <button
              id="customizer-generate-dossier-btn"
              onClick={handleGenerateDossier}
              className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#DFBA73] to-[#C8A265] hover:brightness-110 text-[#0B0F12] text-xs uppercase tracking-wider font-semibold rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg text-center"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Receber Dossiê da Minha Unidade</span>
            </button>

            <span className="block text-[10px] text-[#788896] text-center leading-tight">
              Dossiê técnico com memorial descritivo, projeção de custos e fluxo de pagamento.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
