import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img src="/src/Logo/UtachaTEKCompleto.png" alt="Utacha TEK Logo Completo" className="h-10 w-auto" />
          </div>
          <div>
            <a
              href="https://wa.me/1234567890?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20equipos"
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
