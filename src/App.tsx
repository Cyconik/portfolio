import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-navy-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Products & Entrepreneurship (Flagship: Bargenify, ScanSecure, Galigram, WebPConverter, SpillX) */}
        <Products />

        {/* 4. Featured Projects & Tools (Universal Reblog, Element Inspector, Bulk Mailer, Leads Scraper, QuickChat, Client Works) */}
        <FeaturedProjects />

        {/* 5. My Journey Timeline */}
        <Journey />

        {/* 6. Professional Experience */}
        <Experience />

        {/* 7. Skills & Capabilities */}
        <Skills />

        {/* 8. Achievements & Formal Education */}
        <Achievements />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Full Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
