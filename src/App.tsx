import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CVModal } from './components/CVModal';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#04140e] text-slate-100 selection:bg-emerald-900 selection:text-amber-300 relative overflow-x-hidden font-sans">
      {/* Subtle global ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
      </div>
      {/* Top Fixed Navigation */}
      <Navbar 
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />

        {/* About Section */}
        <AboutSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Skills Showcase Section */}
        <SkillsSection />

        {/* Featured Projects Section */}
        <ProjectsSection />

        {/* Services Offered Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Working Contact Section */}
        <ContactSection selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Fixed Floating WhatsApp Button on bottom-right */}
      <FloatingWhatsApp />

      {/* Interactive CV Modal */}
      <CVModal 
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Standalone Single-File HTML Export Modal */}
      <SingleFileExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
