export interface UnitType {
  id: string;
  name: string;
  badge: string;
  areaPrivativa: number;
  areaTotal: number;
  suites: number;
  vagas: number;
  andar: string;
  precoEstimado: string;
  tagline: string;
  description: string;
  diferenciais: string[];
  specs: {
    peDireito: string;
    livingIntegrado: string;
    varandaGourmet: string;
    piscinaPrivativa: string;
    adega: string;
    isolamentoAcustico: string;
  };
  floorplanSvg: string;
  image: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: 'wellness' | 'social' | 'servicos' | 'esportes';
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface NearbySpot {
  name: string;
  category: 'gastronomia' | 'luxo' | 'natureza' | 'conveniencia';
  distance: string;
  timeWalkingOrDriving: string;
  description: string;
}

export interface LeadData {
  nome: string;
  email: string;
  telefone: string;
  unidadeInteresse: string;
  canalPreferencia: 'whatsapp' | 'ligacao' | 'email';
  horarioVisita?: string;
  dataVisita?: string;
  mensagem?: string;
}
