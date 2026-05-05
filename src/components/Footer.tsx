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
                <span>Arequipilla, Peru, 054. Puno Region · Arequipa, Perú · Tacna, Perú · Cuzco, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sky-500 flex-shrink-0" size={20} />
                <span>989 721 843</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-500 flex-shrink-0" size={20} />
                <span>Utacha.tek@gmail.com</span>
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
        
        {/* Redes Sociales Centrales */}
        <div className="border-t border-slate-800 pt-10 pb-6 mt-8 flex flex-col items-center justify-center">
          <h4 className="text-sm font-bold text-slate-300 mb-6 uppercase tracking-[0.2em]">Conecta con Nuestras Redes</h4>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/utacha-tek/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2" title="LinkedIn">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-sky-400 transition-colors opacity-0 group-hover:opacity-100 font-medium">LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/utachatek" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2" title="Facebook">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-[#1877F2] group-hover:text-white transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-sky-400 transition-colors opacity-0 group-hover:opacity-100 font-medium">Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@utacha_tek" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2" title="TikTok">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-[#ff0050] group-hover:text-white transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="20" height="20"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
              </div>
              <span className="text-xs text-slate-500 group-hover:text-sky-400 transition-colors opacity-0 group-hover:opacity-100 font-medium">TikTok</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Utacha TEK. Todos los derechos reservados.
          </p>
          <div className="text-xs text-slate-500 tracking-wider">
            HEAVY DUTY TELECOMMUNICATIONS
          </div>
        </div>
      </div>
    </footer>
  );
}
