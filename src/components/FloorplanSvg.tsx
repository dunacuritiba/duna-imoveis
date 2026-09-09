import React from 'react';

interface FloorplanSvgProps {
  type: 'maison' | 'garden' | 'penthouse';
}

export const FloorplanSvg: React.FC<FloorplanSvgProps> = ({ type }) => {
  if (type === 'maison') {
    return (
      <svg
        viewBox="0 0 800 520"
        className="w-full h-auto bg-[#070A0D] rounded-sm p-4 border border-white/10 select-none text-xs"
        aria-label="Planta Baixa Arquitetônica - Maison Suspensa 342m²"
      >
        {/* Grid lines background */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#232C35" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="520" fill="url(#grid)" />

        {/* Outer Walls */}
        <rect x="50" y="40" width="700" height="440" fill="none" stroke="#C8A265" strokeWidth="3" rx="4" />

        {/* Living Integrado & Dining */}
        <rect x="60" y="50" width="340" height="230" fill="#12171D" stroke="#3A4753" strokeWidth="1.5" />
        <text x="230" y="140" fill="#F3DEAC" textAnchor="middle" className="font-serif text-sm font-medium">
          LIVING INTEGRADO & JANTAR (98 m²)
        </text>
        <text x="230" y="165" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Pé-direito 3.10m · Lareira suspensa a bioetanol
        </text>

        {/* Varanda com Piscina Privativa */}
        <rect x="60" y="290" width="340" height="180" fill="#182027" stroke="#3A4753" strokeWidth="1.5" />
        {/* Piscina */}
        <rect x="80" y="320" width="130" height="120" fill="#0A2540" stroke="#00D4B2" strokeWidth="1.5" rx="3" />
        <text x="145" y="385" fill="#5CE1E6" textAnchor="middle" className="text-[11px] font-semibold">
          Piscina Aquecida
        </text>
        <text x="145" y="402" fill="#5CE1E6" textAnchor="middle" className="text-[9px]">
          (Deck Cumaru)
        </text>
        <text x="280" y="370" fill="#E8ECEF" textAnchor="middle" className="font-serif text-xs">
          VARANDA GOURMET (44 m²)
        </text>
        <text x="280" y="390" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Churrasqueira a carvão & bancada
        </text>

        {/* Hall Social & Adega Privativa */}
        <rect x="410" y="50" width="90" height="130" fill="#151C22" stroke="#3A4753" strokeWidth="1" />
        <text x="455" y="105" fill="#DFBA73" textAnchor="middle" className="text-[10px] font-medium">
          HALL SOCIAL
        </text>
        <text x="455" y="120" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
          Elevador Privativo
        </text>

        <rect x="410" y="190" width="90" height="90" fill="#1C1812" stroke="#C8A265" strokeWidth="1" />
        <text x="455" y="235" fill="#DFBA73" textAnchor="middle" className="text-[10px] font-medium">
          ADEGA PRIVÉE
        </text>
        <text x="455" y="250" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
          120 Rótulos
        </text>

        {/* Suíte Master */}
        <rect x="510" y="50" width="230" height="210" fill="#12171D" stroke="#3A4753" strokeWidth="1.5" />
        <text x="625" y="120" fill="#F3DEAC" textAnchor="middle" className="font-serif text-sm font-medium">
          SUÍTE MASTER (48 m²)
        </text>
        <text x="625" y="140" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Closet duplo Sr. & Sra.
        </text>
        <text x="625" y="160" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Banheira esculpida em mármore
        </text>

        {/* Suítes 2, 3 e 4 */}
        <rect x="510" y="270" width="110" height="200" fill="#12171D" stroke="#3A4753" strokeWidth="1" />
        <text x="565" y="360" fill="#E8ECEF" textAnchor="middle" className="text-[11px]">
          SUÍTE 02 (22 m²)
        </text>
        <text x="565" y="380" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
          Piso Aquecido
        </text>

        <rect x="630" y="270" width="110" height="200" fill="#12171D" stroke="#3A4753" strokeWidth="1" />
        <text x="685" y="360" fill="#E8ECEF" textAnchor="middle" className="text-[11px]">
          SUÍTE 03 (20 m²)
        </text>
        <text x="685" y="380" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
          Piso Aquecido
        </text>

        {/* Cozinha & Área de Serviço */}
        <rect x="410" y="290" width="90" height="180" fill="#10151A" stroke="#3A4753" strokeWidth="1" />
        <text x="455" y="370" fill="#E8ECEF" textAnchor="middle" className="text-[10px]">
          COZINHA & ÁREA DE SERVIÇO
        </text>
        <text x="455" y="395" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
          Acesso de Serviço
        </text>

        {/* Compass Rose */}
        <g transform="translate(710, 80)">
          <circle cx="0" cy="0" r="16" fill="#0B0F12" stroke="#C8A265" strokeWidth="1" />
          <path d="M 0 -12 L 3 0 L 0 3 L -3 0 Z" fill="#C8A265" />
          <text x="0" y="-15" fill="#C8A265" textAnchor="middle" className="text-[9px] font-bold">N</text>
        </g>
      </svg>
    );
  }

  if (type === 'garden') {
    return (
      <svg
        viewBox="0 0 800 520"
        className="w-full h-auto bg-[#070A0D] rounded-sm p-4 border border-white/10 select-none text-xs"
        aria-label="Planta Baixa Arquitetônica - Garden Residence 438m²"
      >
        <defs>
          <pattern id="grid-garden" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#232C35" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="520" fill="url(#grid-garden)" />

        {/* Outer Frame */}
        <rect x="50" y="40" width="700" height="440" fill="none" stroke="#C8A265" strokeWidth="3" rx="4" />

        {/* Bosque Privativo / Garden 128m² */}
        <rect x="60" y="50" width="280" height="420" fill="#0E1B15" stroke="#2E7D32" strokeWidth="1.5" />
        {/* Raia privativa */}
        <rect x="80" y="80" width="60" height="340" fill="#0A2A38" stroke="#00D4B2" strokeWidth="1.5" rx="3" />
        <text x="110" y="250" fill="#5CE1E6" textAnchor="middle" transform="rotate(-90 110 250)" className="text-[11px] font-semibold">
          RAIA AQUECIDA PRIVATIVA (12 METROS)
        </text>
        <text x="230" y="160" fill="#81C784" textAnchor="middle" className="font-serif text-sm font-semibold">
          BOSQUE PRIVATIVO (128 m²)
        </text>
        <text x="230" y="190" fill="#A5D6A7" textAnchor="middle" className="text-[10px]">
          Gazebo · Fire Pit · Araucárias Preservadas
        </text>
        <text x="230" y="210" fill="#A5D6A7" textAnchor="middle" className="text-[10px]">
          Parrilla Argentina & Forno a Lenha
        </text>

        {/* Living Ampliado */}
        <rect x="350" y="50" width="220" height="230" fill="#12171D" stroke="#3A4753" strokeWidth="1.5" />
        <text x="460" y="150" fill="#F3DEAC" textAnchor="middle" className="font-serif text-sm font-medium">
          LIVING ABERTO (115 m²)
        </text>
        <text x="460" y="175" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Abertura retrátil 100% para o jardim
        </text>

        {/* Home Cinema */}
        <rect x="350" y="290" width="220" height="180" fill="#101318" stroke="#3A4753" strokeWidth="1" />
        <text x="460" y="375" fill="#E8ECEF" textAnchor="middle" className="font-serif text-xs font-medium">
          HOME CINEMA ACÚSTICO
        </text>
        <text x="460" y="395" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Tratamento acústico estúdio 48dB
        </text>

        {/* Suítes Garden */}
        <rect x="580" y="50" width="160" height="200" fill="#12171D" stroke="#3A4753" strokeWidth="1.5" />
        <text x="660" y="140" fill="#F3DEAC" textAnchor="middle" className="font-serif text-xs font-medium">
          SUÍTE MASTER GARDEN
        </text>
        <text x="660" y="160" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Vista bosque & Spa privativo
        </text>

        <rect x="580" y="260" width="160" height="210" fill="#12171D" stroke="#3A4753" strokeWidth="1" />
        <text x="660" y="355" fill="#E8ECEF" textAnchor="middle" className="text-[11px]">
          SUÍTES 02, 03 & 04
        </text>
        <text x="660" y="375" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
          Todas com banheiros aquecidos
        </text>

        {/* Compass Rose */}
        <g transform="translate(710, 80)">
          <circle cx="0" cy="0" r="16" fill="#0B0F12" stroke="#C8A265" strokeWidth="1" />
          <path d="M 0 -12 L 3 0 L 0 3 L -3 0 Z" fill="#C8A265" />
          <text x="0" y="-15" fill="#C8A265" textAnchor="middle" className="text-[9px] font-bold">N</text>
        </g>
      </svg>
    );
  }

  // Penthouse Triplex
  return (
    <svg
      viewBox="0 0 800 520"
      className="w-full h-auto bg-[#070A0D] rounded-sm p-4 border border-white/10 select-none text-xs"
      aria-label="Planta Baixa Arquitetônica - Penthouse Triplex 685m²"
    >
      <defs>
        <pattern id="grid-ph" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#232C35" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="800" height="520" fill="url(#grid-ph)" />

      {/* Outer Frame */}
      <rect x="50" y="40" width="700" height="440" fill="none" stroke="#DFBA73" strokeWidth="3" rx="4" />

      {/* Rooftop Panorâmico 360° com Piscina com Visor de Vidro */}
      <rect x="60" y="50" width="300" height="420" fill="#0E1620" stroke="#DFBA73" strokeWidth="1.5" />
      {/* Piscina de vidro */}
      <rect x="80" y="70" width="260" height="140" fill="#072A40" stroke="#00E5FF" strokeWidth="2" rx="4" />
      <text x="210" y="135" fill="#80D8FF" textAnchor="middle" className="font-serif text-xs font-bold">
        PISCINA SUSPENSA COM FUNDO DE VIDRO
      </text>
      <text x="210" y="155" fill="#80D8FF" textAnchor="middle" className="text-[10px]">
        (Aquecida com cascata e borda infinita)
      </text>

      {/* Heliponto Spot / Solarium */}
      <circle cx="210" cy="330" r="70" fill="#121E2A" stroke="#DFBA73" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="210" y="325" fill="#DFBA73" textAnchor="middle" className="text-2xl font-bold font-sans">
        H
      </text>
      <text x="210" y="350" fill="#DFBA73" textAnchor="middle" className="text-[9px] tracking-widest font-semibold">
        DRONE / EVTOL SPOT
      </text>
      <text x="210" y="368" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
        Solarium 360° Serra do Mar
      </text>

      {/* Living Pé-Direito Duplo 6.20m */}
      <rect x="370" y="50" width="220" height="230" fill="#141C24" stroke="#DFBA73" strokeWidth="1.5" />
      <text x="480" y="145" fill="#F3DEAC" textAnchor="middle" className="font-serif text-sm font-semibold">
        GRAND LIVING DUPLEX (180 m²)
      </text>
      <text x="480" y="170" fill="#DFBA73" textAnchor="middle" className="text-[11px] font-medium">
        Pé-direito monumental de 6.20 metros
      </text>
      <text x="480" y="190" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
        Elevador interno privativo panorâmico
      </text>

      {/* Adega 600 garrafas */}
      <rect x="370" y="290" width="220" height="180" fill="#1F1710" stroke="#C8A265" strokeWidth="1" />
      <text x="480" y="375" fill="#DFBA73" textAnchor="middle" className="font-serif text-xs font-semibold">
        CAVE SOMMELIER PRIVATIVA
      </text>
      <text x="480" y="395" fill="#8E9CA8" textAnchor="middle" className="text-[10px]">
        Capacidade 600 garrafas com sala de degustação
      </text>

      {/* Suíte Presidencial Master 110m² */}
      <rect x="600" y="50" width="140" height="420" fill="#12171D" stroke="#3A4753" strokeWidth="1.5" />
      <text x="670" y="170" fill="#F3DEAC" textAnchor="middle" className="font-serif text-xs font-semibold">
        SUÍTE PRESIDENCIAL
      </text>
      <text x="670" y="190" fill="#DFBA73" textAnchor="middle" className="text-[10px] font-bold">
        110 m² Privativos
      </text>
      <text x="670" y="220" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
        Dois Closets Walk-in
      </text>
      <text x="670" y="240" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
        Sauna & Spa Privativos
      </text>
      <text x="670" y="260" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
        Sacada Panorâmica
      </text>
      <text x="670" y="360" fill="#E8ECEF" textAnchor="middle" className="text-[10px]">
        4 Suítes Secundárias
      </text>
      <text x="670" y="380" fill="#8E9CA8" textAnchor="middle" className="text-[9px]">
        no Pavimento Superior
      </text>

      {/* Compass Rose */}
      <g transform="translate(710, 80)">
        <circle cx="0" cy="0" r="16" fill="#0B0F12" stroke="#DFBA73" strokeWidth="1" />
        <path d="M 0 -12 L 3 0 L 0 3 L -3 0 Z" fill="#DFBA73" />
        <text x="0" y="-15" fill="#DFBA73" textAnchor="middle" className="text-[9px] font-bold">N</text>
      </g>
    </svg>
  );
};
