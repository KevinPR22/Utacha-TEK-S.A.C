import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-900"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-sm font-semibold mb-6">
            <ShieldCheck size={16} />
            <span>Resistencia y Tecnología para la Industria</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Comunicaciones Tácticas para <span className="text-orange-500">Operaciones Críticas</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Equipos de radiocomunicación industrial diseñados para soportar los entornos más exigentes. Conectividad inquebrantable para minería, construcción y entidades del Estado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#catalog"
              className="inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-orange-500/25"
            >
              Ver Catálogo
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
