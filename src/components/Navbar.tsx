import { Phone } from 'lucide-react';
<<<<<<< HEAD
import type { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
=======

export default function Navbar() {
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
<<<<<<< HEAD
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <img src="/UtachaTEKCompleto.png" alt="Utacha TEK Logo Completo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
            <button 
              onClick={() => onViewChange('home')}
              className={`hover:text-sky-600 transition-colors ${currentView === 'home' ? 'text-sky-600' : ''}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => {
                onViewChange('home');
                // Allow a small delay for the view to switch before scrolling
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-sky-600 transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => onViewChange('catalog')}
              className={`hover:text-sky-600 transition-colors ${currentView === 'catalog' ? 'text-sky-600' : ''}`}
            >
              Catálogo
            </button>
          </div>

=======
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img src="/UtachaTEKCompleto.png" alt="Utacha TEK Logo Completo" className="h-12 w-auto" />
          </div>
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
          <div>
            <a
              href="https://wa.me/51989721843?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20equipos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-5 py-2.5 rounded-md font-semibold transition-colors duration-200"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">Contactar Ventas</span>
              <span className="sm:hidden">Ventas</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
