<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CatalogSection from './components/CatalogSection';
<<<<<<< HEAD
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export type ViewState = 'home' | 'catalog';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-grow pt-20"> {/* Added pt-20 to account for fixed navbar */}
        {currentView === 'home' ? (
          <>
            <HeroSection onViewCatalog={() => setCurrentView('catalog')} />
            <AboutSection />
            <ServicesSection />
          </>
        ) : (
          <CatalogSection onBackHome={() => setCurrentView('home')} />
        )}
=======
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CatalogSection />
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
      </main>
      <Footer />
    </div>
  );
}

export default App;
