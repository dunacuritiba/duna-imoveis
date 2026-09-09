import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { UnitsSection } from './components/UnitsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { LocationSection } from './components/LocationSection';
import { UnitCustomizer } from './components/UnitCustomizer';
import { SustainabilitySection } from './components/SustainabilitySection';
import { GalleryLightbox } from './components/GalleryLightbox';
import { LeadModal } from './components/LeadModal';
import { Footer } from './components/Footer';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalMode, setLeadModalMode] = useState<'visit' | 'book' | 'custom'>('visit');
  const [selectedUnit, setSelectedUnit] = useState<string>('Maison Suspensa (342 m²)');
  const [customDetails, setCustomDetails] = useState<string>('');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleOpenBooking = (unitName?: string) => {
    if (unitName) {
      setSelectedUnit(unitName);
    }
    setLeadModalMode('visit');
    setCustomDetails('');
    setIsLeadModalOpen(true);
  };

  const handleOpenBookDownload = () => {
    setLeadModalMode('book');
    setCustomDetails('');
    setIsLeadModalOpen(true);
  };

  const handleOpenCustomDossier = (summary: string) => {
    setLeadModalMode('custom');
    setCustomDetails(summary);
    setIsLeadModalOpen(true);
  };

  const handleOpenGallery = (index: number = 0) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F12] text-[#E8ECEF] selection:bg-[#C8A265] selection:text-[#0B0F12] flex flex-col font-sans">
      {/* Top Floating Luxury Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenBookDownload={handleOpenBookDownload}
      />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenBookDownload={handleOpenBookDownload}
          onOpenGallery={handleOpenGallery}
        />

        <ConceptSection />

        <UnitsSection
          onSelectUnitForBooking={(unitName) => handleOpenBooking(unitName)}
          onOpenBookDownload={handleOpenBookDownload}
          onOpenGallery={handleOpenGallery}
        />

        <AmenitiesSection onOpenBooking={() => handleOpenBooking()} />

        <LocationSection />

        <UnitCustomizer onOpenBookingWithDetails={handleOpenCustomDossier} />

        <SustainabilitySection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenBookDownload={handleOpenBookDownload}
      />

      {/* Floating Concierge / WhatsApp Dock */}
      <div
        id="floating-concierge-dock"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5"
      >
        <button
          id="floating-schedule-btn"
          onClick={() => handleOpenBooking()}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#12171D]/90 hover:bg-[#182027] border border-[#C8A265]/50 text-white text-xs uppercase tracking-wider rounded-full shadow-2xl backdrop-blur-md transition-all cursor-pointer group"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C8A265] group-hover:scale-110 transition-transform" />
          <span>Visita VIP</span>
        </button>

        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/5541999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20exclusivas%20sobre%20o%20lan%C3%A7amento%20do%20AURORA%20Batel%20em%20Curitiba."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
          title="Fale com o Concierge no WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>

      {/* Gallery Lightbox */}
      <GalleryLightbox
        isOpen={isGalleryOpen}
        initialIndex={galleryIndex}
        onClose={() => setIsGalleryOpen(false)}
      />

      {/* Lead Capture / VIP Booking Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        mode={leadModalMode}
        defaultUnit={selectedUnit}
        customDetails={customDetails}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </div>
  );
}
