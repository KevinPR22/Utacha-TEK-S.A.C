import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur z-50 border-b border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-white">
              UTACHA<span className="text-orange-500">TEK</span>
            </span>
          </div>
          <div>
            <a 
              href="https://wa.me/1234567890?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20equipos" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors duration-200"
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
