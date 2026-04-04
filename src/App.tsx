import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CatalogSection from './components/CatalogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CatalogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
