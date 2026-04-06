import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-black tracking-tighter text-white mb-6 block">
              UTACHA<span className="text-sky-500">TEK</span>
            </span>
            <p className="text-slate-400 mb-6 max-w-sm">
              Especialistas en telecomunicaciones industriales de alto rendimiento. Brindamos soluciones asertivas frente a entornos y condiciones extremas en todo el territorio.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contacto Comercial</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-500 mt-1 flex-shrink-0" size={20} />
                <span>Arequipilla, Peru, 054. Puno Region · Arequipa, Perú · Tacna, Perú · Cuzco, Perú + 1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sky-500 flex-shrink-0" size={20} />
                <span>989 721 843</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-500 flex-shrink-0" size={20} />
                <span>utachatec@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Soluciones</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Radiocomunicación Digital</a></li>
              <li><a href="#catalog" className="hover:text-sky-400 transition-colors">Catálogo de Equipos</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Soporte Técnico Especializado</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Utacha TEK. Todos los derechos reservados.
          </p>
          <div className="text-sm text-slate-500">
            Heavy Duty Telecommunications
          </div>
        </div>
      </div>
    </footer>
  );
}
