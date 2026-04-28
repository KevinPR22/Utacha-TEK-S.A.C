import { Mountain, Cpu } from 'lucide-react';
import FadeIn from './FadeIn';

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-200/50 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Nuestro ADN</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn direction="left" delay={100}>
            <div className="h-full bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl ring-1 ring-slate-900/5 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner ring-1 ring-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                <Mountain size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Misión</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Proveer soluciones integrales en radiocomunicación, telecomunicaciones y otros que garanticen la conectividad total de nuestros clientes, fundamentados en los valores de solidez y confianza de Utacha (casa) y el impulso constante de la innovación TEK.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="h-full bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl ring-1 ring-slate-900/5 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-50 text-sky-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner ring-1 ring-sky-500/20 group-hover:scale-110 transition-transform duration-500">
                <Cpu size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Visión</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Convertirnos en la infraestructura base de la conectividad industrial del futuro. Queremos llevar la solidez inquebrantable de Utacha a cada rincón donde las comunicaciones sean críticas, demostrando que desde nuestras raíces podemos liderar la vanguardia tecnológica y proteger el activo más valioso de nuestros clientes.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
