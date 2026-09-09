import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Download, MessageSquare, Calendar, Phone, Mail, User, Sparkles, ArrowRight } from 'lucide-react';
import { PROJECT_DETAILS, UNITS } from '../data/residenceData';

interface LeadModalProps {
  isOpen: boolean;
  mode: 'visit' | 'book' | 'custom';
  defaultUnit?: string;
  customDetails?: string;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  mode,
  defaultUnit,
  customDetails,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    unidade: defaultUnit || 'Maison Suspensa (342 m²)',
    canal: 'whatsapp',
    turno: 'tarde',
    dataVisita: '',
    observacoes: customDetails || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  useEffect(() => {
    if (defaultUnit) {
      setFormData((prev) => ({ ...prev, unidade: defaultUnit }));
    }
    if (customDetails) {
      setFormData((prev) => ({ ...prev, observacoes: customDetails }));
    }
  }, [defaultUnit, customDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDownloadPdf = () => {
    setDownloadTriggered(true);
    // Trigger simulated download or blob
    const element = document.createElement('a');
    const file = new Blob(
      [
        `AURORA Batel — Private Residences
Endereço: ${PROJECT_DETAILS.address}
Empreendimento Fake de Alto Padrão em Curitiba

MEMORIAL ARQUITETÔNICO & BOOK DE APRESENTAÇÃO EXCLUSIVA
Unidade Solicitada: ${formData.unidade}
Cliente: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}

Destaques:
- 14 Residências Suspensas no Batel Soho
- 1 por andar com elevador biométrico privativo
- Piscina aquecida em todas as residências
- Certificação LEED Platinum & Selo WELL Gold
- Acústica Schüco 42dB e vidros insulados

Incorporação Registrada: ${PROJECT_DETAILS.registrationNumber}
ARBOR & CO. Private Developments`,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'AURORA_Batel_Book_Apresentacao_2026.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      id="lead-capture-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#12171D] border border-[#C8A265]/40 rounded-sm max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-[#C8A265] hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="p-5 sm:p-7 bg-[#151C22] border-b border-white/10 pr-12">
              <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#DFBA73] font-medium block mb-1">
                Atendimento VIP · AURORA Batel
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light leading-snug">
                {mode === 'visit'
                  ? 'Agende sua Visita ao Lounge Batel'
                  : mode === 'book'
                  ? 'Baixe o Book Arquitetônico Completo'
                  : 'Solicite o Dossiê da sua Unidade'}
              </h3>
              <p className="text-xs text-[#8E9CA8] mt-1.5 font-light leading-relaxed text-pretty">
                {mode === 'visit'
                  ? 'Experiência exclusiva com degustação de vinhos, maquete física e tour de realidade virtual.'
                  : 'Receba a apresentação técnica com plantas cotadas, especificações e tabela com condições exclusivas de lançamento.'}
              </p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-3.5 sm:space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1.5">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8E9CA8] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Dr. Alexandre de Oliveira"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-[#0B0F12] border border-white/10 rounded-sm text-sm text-white placeholder:text-[#525F6A] focus:border-[#C8A265] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8E9CA8] absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="(41) 99999-0000"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#0B0F12] border border-white/10 rounded-sm text-sm text-white placeholder:text-[#525F6A] focus:border-[#C8A265] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1.5">
                    E-mail Corporativo ou Pessoal *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8E9CA8] absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="alexandre@exemplo.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#0B0F12] border border-white/10 rounded-sm text-sm text-white placeholder:text-[#525F6A] focus:border-[#C8A265] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1.5">
                    Unidade de Interesse
                  </label>
                  <select
                    value={formData.unidade}
                    onChange={(e) => setFormData({ ...formData, unidade: e.target.value })}
                    className="w-full px-3 py-3 bg-[#0B0F12] border border-white/10 rounded-sm text-xs text-white focus:border-[#C8A265] focus:outline-none"
                  >
                    <option value="Maison Suspensa (342 m²)">Maison Suspensa (342 m²)</option>
                    <option value="Garden Residence (438 m²)">Garden Residence com Bosque (438 m²)</option>
                    <option value="Penthouse Triplex (685 m²)">Penthouse Triplex Sky Mansion (685 m²)</option>
                    <option value="Ainda em definição">Quero auxílio para escolher</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1.5">
                    Canal de Contato Preferencial
                  </label>
                  <select
                    value={formData.canal}
                    onChange={(e) => setFormData({ ...formData, canal: e.target.value })}
                    className="w-full px-3 py-3 bg-[#0B0F12] border border-white/10 rounded-sm text-xs text-white focus:border-[#C8A265] focus:outline-none"
                  >
                    <option value="whatsapp">Mensagem Discreta por WhatsApp</option>
                    <option value="ligacao">Ligação Telefônica com Concierge</option>
                    <option value="email">Somente por E-mail</option>
                  </select>
                </div>
              </div>

              {mode === 'visit' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1.5">
                      Data Sugerida para Visita
                    </label>
                    <input
                      type="date"
                      value={formData.dataVisita}
                      onChange={(e) => setFormData({ ...formData, dataVisita: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0B0F12] border border-white/10 rounded-sm text-xs text-white focus:border-[#C8A265] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1.5">
                      Turno de Preferência
                    </label>
                    <select
                      value={formData.turno}
                      onChange={(e) => setFormData({ ...formData, turno: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0B0F12] border border-white/10 rounded-sm text-xs text-white focus:border-[#C8A265] focus:outline-none"
                    >
                      <option value="manha">Manhã (09h às 12h)</option>
                      <option value="tarde">Tarde (14h às 18h)</option>
                      <option value="noite">Noite Exclusiva (18h30 às 21h)</option>
                    </select>
                  </div>
                </div>
              )}

              {formData.observacoes && (
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#A0ABB6] font-medium block mb-1">
                    Configuração / Observações Selecionadas
                  </label>
                  <textarea
                    rows={2}
                    value={formData.observacoes}
                    onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                    className="w-full p-2.5 bg-[#0B0F12] border border-white/10 rounded-sm text-xs text-[#B9C4CE] focus:border-[#C8A265] focus:outline-none resize-none"
                  />
                </div>
              )}

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#DFBA73] to-[#C8A265] hover:brightness-110 text-[#0B0F12] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {mode === 'visit'
                      ? 'Confirmar Solicitação de Visita VIP'
                      : 'Solicitar Acesso ao Material Completo'}
                  </span>
                </button>
              </div>

              <p className="text-[10px] text-[#788896] text-center">
                Garantia de sigilo bancário e discrição total. Seus dados não serão compartilhados com terceiros.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-10 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#81C784]/20 border border-[#81C784] text-[#81C784] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A265] font-semibold block mb-1">
                Solicitação Recebida com Sucesso
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                Bem-vindo ao universo AURORA Batel, {formData.nome.split(' ')[0]}.
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9CA8] mt-2 font-light max-w-md mx-auto">
                Nosso Concierge Private entrará em contato via{' '}
                <strong className="text-white">{formData.canal.toUpperCase()}</strong> em até 30 minutos
                para confirmar seu acesso prioritário.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="p-4 bg-[#0B0F12] rounded-sm border border-white/10 space-y-3 max-w-md mx-auto text-left">
              <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-[#8E9CA8]">Unidade Selecionada:</span>
                <span className="text-[#DFBA73] font-medium">{formData.unidade}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8E9CA8]">Lounge de Atendimento:</span>
                <span className="text-white font-medium">Rua Fernando Simas, Batel</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadPdf}
                className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-sm text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#C8A265]" />
                <span>{downloadTriggered ? 'Dossiê Baixado' : 'Baixar Book em PDF'}</span>
              </button>

              <a
                href={`https://wa.me/5541999999999?text=Olá,%20sou%20${encodeURIComponent(
                  formData.nome
                )}%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20lançamento%20do%20AURORA%20Batel.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar no WhatsApp Agora</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs text-[#8E9CA8] hover:text-white underline cursor-pointer"
              >
                Retornar ao site do empreendimento
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
