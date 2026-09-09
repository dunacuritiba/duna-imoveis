import { UnitType, Amenity, NearbySpot } from '../types';

// Images imported for Vite asset pipeline
import facadeImg from '../assets/images/aurora_facade_curitiba_1788965788857.jpg';
import livingImg from '../assets/images/aurora_living_room_1788965805353.jpg';
import spaImg from '../assets/images/aurora_wellness_spa_1788965818284.jpg';
import suiteImg from '../assets/images/aurora_suite_master_1788965833583.jpg';

export const ASSETS = {
  facade: facadeImg,
  living: livingImg,
  spa: spaImg,
  suite: suiteImg,
};

export const PROJECT_DETAILS = {
  name: 'AURORA Batel',
  subtitle: 'Private Residences',
  city: 'Curitiba, PR',
  neighborhood: 'Batel Soho',
  address: 'Rua Fernando Simas, 480 — Batel, Curitiba - PR',
  unitsTotal: 14,
  unitsPerFloor: 1,
  totalFloors: 16,
  launchYear: '2026',
  architect: 'Bertoldi & Associados Studio',
  landscaping: 'Burle Atelier Paisagismo',
  interiorDesign: 'Lia Siqueira & Studio Aurora',
  developer: 'ARBOR & CO. Private Developments',
  registrationNumber: 'R.I. R-12/189.432 — 6ª Circunscrição Imobiliária de Curitiba',
};

export const UNITS: UnitType[] = [
  {
    id: 'maison-suspensa',
    name: 'Maison Suspensa',
    badge: '1 por andar — 3º ao 12º andar',
    areaPrivativa: 342,
    areaTotal: 580,
    suites: 4,
    vagas: 4,
    andar: '3º ao 12º Pavimento',
    precoEstimado: 'Sob Consulta Exclusiva',
    tagline: 'O equilíbrio supremo entre privacidade panorâmica e aconchego contemporâneo.',
    description:
      'Projetada com planta 100% livre de pilares intermediários no living, a Maison Suspensa oferece uma experiência sensorial de casa térrea nas alturas. Integração total entre sala de estar, lareira suspensa a bioetanol e varanda com piscina aquecida privativa.',
    diferenciais: [
      'Piscina privativa aquecida na varanda com deck em Cumaru',
      'Suíte master com 48m², walk-in closet senhor e senhora e banheira esculpida em mármore Michelangelo Nuvolato',
      'Esquadrias alemãs Schüco piso-teto com atenuação acústica de 42dB',
      'Piso aquecido digital nos banheiros e dormitórios',
      'Adega privativa climatizada no apartamento com capacidade para 120 rótulos',
      '4 vagas demarcadas com ponto de recarga rápida individual para veículos elétricos (22 kW)',
      'Acesso biométrico individual com elevador social privativo de alta velocidade',
    ],
    specs: {
      peDireito: '3.10 m livre',
      livingIntegrado: '98 m² com vista 270°',
      varandaGourmet: '44 m² com churrasqueira a carvão embutida',
      piscinaPrivativa: 'Com borda infinita e hidromassagem',
      adega: 'Climatizada com fechadura biométrica',
      isolamentoAcustico: 'Manta fonoabsorvente de 10mm sob contrapiso',
    },
    floorplanSvg: 'maison',
    image: livingImg,
  },
  {
    id: 'garden-residence',
    name: 'Garden Residence',
    badge: 'Exclusiva — 2º andar com Bosque Privativo',
    areaPrivativa: 438,
    areaTotal: 740,
    suites: 4,
    vagas: 5,
    andar: '2º Pavimento',
    precoEstimado: 'Sob Consulta Exclusiva',
    tagline: 'A sensação de morar em uma chácara urbana privativa no centro do Batel.',
    description:
      'Uma residência ímpar com 128 m² de terraço ao ar livre rodeado por vegetação nativa preservada de Curitiba, piscina privativa com raia aquecida e gazebo gourmet sob copa de araucárias.',
    diferenciais: [
      '128 m² de jardim e terraço ao ar livre de uso estritamente privativo',
      'Piscina privativa com raia de 12m e borda em pedra Hijau da Indonésia',
      'Gazebo com lareira de chão (fire pit) e espaço parrilla argentina',
      'Home Cinema com isolamento acústico dedicado de estúdio profissional',
      '5 vagas de garagem cobertas com box privativo de 18m²',
      'Entrada independente de serviço e circulação blindada',
    ],
    specs: {
      peDireito: '3.40 m livre no living',
      livingIntegrado: '115 m² com abertura panorâmica total',
      varandaGourmet: 'Gazebo externo com parrilla e forno a lenha',
      piscinaPrivativa: 'Raia de 12m com aquecimento solar e trocador de calor',
      adega: 'Cave privada com degustação',
      isolamentoAcustico: 'Esquadrias acústicas triplas e paredes duplas',
    },
    floorplanSvg: 'garden',
    image: suiteImg,
  },
  {
    id: 'sky-penthouse',
    name: 'Penthouse Triplex Sky Mansion',
    badge: 'Obra de Arte — 14º ao 16º andar',
    areaPrivativa: 685,
    areaTotal: 1120,
    suites: 5,
    vagas: 6,
    andar: '14º, 15º e 16º Pavimentos (Triplex)',
    precoEstimado: 'Sob Consulta Exclusiva',
    tagline: 'O ponto mais alto e imponente de Curitiba. A vista que transcende o horizonte.',
    description:
      'A expressão máxima do luxo vertical. Pavimento intermediário com pé-direito duplo de 6.20 metros, rooftop panorâmico 360° com piscina suspensa de fundo de vidro, elevador privativo interno entre os 3 níveis e heliponto spot homologado drone/eVTOL ready.',
    diferenciais: [
      'Rooftop 360° exclusivo com solarium e piscina com visor de vidro panorâmico',
      'Elevador privativo interno em vidro atendendo aos 3 pavimentos da penthouse',
      'Pé-direito duplo de 6.20m no living principal com lustre monumental',
      'Suíte Master Presidencial com 110m², dois closets walk-in, sauna privativa e spa de casal',
      'Adega para 600 garrafas com sala de degustação climatizada privativa',
      '6 vagas no subsolo com box de ferramentas e carregador rápido trifásico de 44 kW',
      'Heliponto privativo para drones de carga e preparado para mobilidade aérea urbana (eVTOL)',
    ],
    specs: {
      peDireito: '6.20 m monumental no living',
      livingIntegrado: '180 m² com vista para a Serra do Mar e Batel',
      varandaGourmet: 'Rooftop com lounge exterior, lareira e solarium',
      piscinaPrivativa: 'Piscina aquecida suspensa com fundo de vidro',
      adega: 'Adega climatizada para 600 garrafas',
      isolamentoAcustico: 'Blindagem acústica nível estúdio e vidros quádruplos no rooftop',
    },
    floorplanSvg: 'penthouse',
    image: facadeImg,
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'spa-wellness',
    title: 'Sanctuary Spa & Crioterapia',
    category: 'wellness',
    subtitle: 'Relaxamento profundo e longevidade no seu próprio edifício.',
    description:
      'Piscina coberta climatizada a 32°C com raia semiolímpica de 25 metros, revestida em pedra hijau vulcânica natural. Espaço spa com sala de crioterapia, banho turco, sauna seca em cedro com vista panorâmica para o bosque de araucárias e salas de massagem equipadas.',
    image: spaImg,
    features: [
      'Piscina com raia de 25m e sistema de tratamento por ozônio',
      'Câmara de crioterapia para recuperação muscular avançada',
      'Sauna seca panorâmica em cedro canadense',
      '2 Salas privativas de atendimento para terapeutas e massoterapeutas',
    ],
  },
  {
    id: 'cave-sommelier',
    title: 'Cave Privé & Cigar Lounge',
    category: 'social',
    subtitle: 'O refúgio dos colecionadores de grandes safras.',
    description:
      'Adega subterrânea climatizada com capacidade controlada de umidade e temperatura. Inclui sala de degustação privativa com louça Baccarat, cristaleiras sob medida e armários individuais trancados com chave digital para cada proprietário.',
    image: livingImg,
    features: [
      'Lockers individuais refrigerados para cada residência',
      'Sommelier consultivo para abastecimento e harmonizações',
      'Lareira ecológica e revestimento em carvalho americano',
      'Sistema de ventilação com exaustão especial para charutaria',
    ],
  },
  {
    id: 'fitness-technogym',
    title: 'Technogym Biostrength Studio',
    category: 'esportes',
    subtitle: 'Tecnologia de ponta utilizada pelos maiores centros atléticos do mundo.',
    description:
      'Academia com 220 m² equipada com a linha completa Artis e Biostrength da Technogym, conectada via inteligência artificial ao seu perfil de treino. Espaço dedicado para pilates clássico com aparelhos da marca canadense Merrithew.',
    image: facadeImg,
    features: [
      'Linha Technogym Artis com telas digitais interativas',
      'Studio de Pilates clássico com aparelhos Cadillac e Reformer',
      'Piso esportivo resiliente com amortecimento de impacto',
      'Área de funcional ao ar livre integrada ao bosque',
    ],
  },
  {
    id: 'sports-pickleball',
    title: 'Quadra de Pickleball Coberta & Squash',
    category: 'esportes',
    subtitle: 'O esporte que conquistou o mundo em ambiente climatizado.',
    description:
      'Quadra oficial coberta e climatizada com iluminação antiofuscante padrão ATP, piso amortecido de resina acrílica e lounge com arquibancada intimista e bar de hidratação.',
    image: suiteImg,
    features: [
      'Climatização silenciosa e controle de umidade',
      'Padrão oficial com isolamento acústico em relação aos apartamentos',
      'Lounge do atleta com chopeira embutida e frigobar Smeg',
    ],
  },
  {
    id: 'concierge-seguranca',
    title: 'Concierge White Glove & Segurança Nível Embaixada',
    category: 'servicos',
    subtitle: 'Comodidade hoteleira de 6 estrelas e blindagem patrimonial.',
    description:
      'Equipe de concierge treinada pela escola suíça para reservas exclusivas, catering, valets e gestão predial. Guarita blindada nível III-A com eclusa dupla para pedestres e veículos, reconhecimento facial de última geração e circuito fechado com inteligência artificial.',
    image: facadeImg,
    features: [
      'Concierge bilíngue 24 horas por dia presencial',
      'Valet parking no subsolo para moradores e visitantes',
      'Guarita com vidros balísticos e blindagem nível III-A',
      'Central de encomendas refrigeradas para entregas gourmets e flores',
    ],
  },
];

export const NEARBY_SPOTS: NearbySpot[] = [
  {
    name: 'Praça da Espanha & Batel Soho',
    category: 'gastronomia',
    distance: '180 metros',
    timeWalkingOrDriving: '2 min a pé',
    description: 'O epicentro cultural e gastronômico de Curitiba, com empórios, bistrôs premiados e feira de antiguidades.',
  },
  {
    name: 'Shopping Pátio Batel',
    category: 'luxo',
    distance: '950 metros',
    timeWalkingOrDriving: '3 min de carro',
    description: 'O principal centro de compras de luxo do sul do Brasil, com grifes como Louis Vuitton, Prada, Gucci, Tiffany & Co. e cinema VIP.',
  },
  {
    name: 'Restaurante Manu (Helena Rizzo / Manu Buffara)',
    category: 'gastronomia',
    distance: '650 metros',
    timeWalkingOrDriving: '2 min de carro',
    description: 'Alta gastronomia reconhecida internacionalmente pelo Latin America’s 50 Best Restaurants.',
  },
  {
    name: 'Parque Barigui',
    category: 'natureza',
    distance: '2,1 km',
    timeWalkingOrDriving: '5 min de carro',
    description: 'O mais célebre parque da cidade, com pista de corrida no lago, Museu do Automóvel e pôr do sol inesquecível.',
  },
  {
    name: 'Nomaa Hotel & Restaurante Nomade',
    category: 'gastronomia',
    distance: '400 metros',
    timeWalkingOrDriving: '4 min a pé',
    description: 'Hotel boutique de design contemporâneo e restaurante premiado no Batel.',
  },
  {
    name: 'Hospital Marcelino Champagnat & Santa Cruz',
    category: 'conveniencia',
    distance: '1,8 km',
    timeWalkingOrDriving: '5 min de carro',
    description: 'Hospitais de excelência médica e centros diagnósticos com acreditação internacional JCI.',
  },
  {
    name: 'Graciosa Country Club',
    category: 'natureza',
    distance: '5,5 km',
    timeWalkingOrDriving: '12 min de carro',
    description: 'O mais tradicional clube de golfe, tênis e convívio social do estado do Paraná.',
  },
];

export const SUSTAINABILITY_SPECS = [
  {
    title: 'Certificação LEED Platinum',
    description: 'Construção com o mais elevado índice de sustentabilidade mundial, garantindo eficiência energética de até 40% superior aos edifícios convencionais.',
  },
  {
    title: 'Selo WELL Building Gold',
    description: 'Foco no bem-estar humano: filtragem Merv-13 do ar interno, água mineral potável em 100% dos pontos da residência e iluminação circadiana.',
  },
  {
    title: 'Energia Solar & Gerador 100%',
    description: 'Painéis fotovoltaicos para suprir a demanda da área comum e gerador silencioso com capacidade para manter 100% do edifício funcionando sem interrupção.',
  },
  {
    title: 'Biofilia & Preservação',
    description: 'Preservação de 18 araucárias centenárias no bosque privativo e jardins suspensos com sistema automatizado de irrigação por reaproveitamento de água pluvial.',
  },
];
