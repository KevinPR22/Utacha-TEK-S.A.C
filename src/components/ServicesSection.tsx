import { Settings, Wrench, HeadphonesIcon, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

export default function ServicesSection() {
  const services = [
    {
      title: 'Venta de Equipos',
      description: 'Suministro de radios, paneles solares, cámaras y equipos de seguridad de las mejores marcas del mercado.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Instalación Especializada',
      description: 'Implementación y montaje de sistemas de telecomunicaciones en entornos industriales y de difícil acceso.',
      icon: <Settings size={32} />
    },
    {
      title: 'Mantenimiento Preventivo',
      description: 'Cuidado y revisión periódica de su infraestructura para garantizar su funcionamiento continuo sin interrupciones.',
      icon: <Wrench size={32} />
    },
    {
      title: 'Soporte 24/7',
      description: 'Asistencia técnica constante para resolver cualquier eventualidad y mantener sus operaciones siempre activas.',
      icon: <HeadphonesIcon size={32} />
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Elementos decorativos oscuros */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-800/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-sky-400 font-bold tracking-wider uppercase text-sm mb-3 block">Nuestras Soluciones</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Servicios Integrales</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-sky-300 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Acompañamos a nuestros clientes en cada etapa del proyecto, desde la adquisición del equipo hasta su puesta en marcha y mantenimiento.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 150}>
              <div className="h-full bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-slate-700 hover:bg-slate-800 hover:border-sky-500/50 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-slate-900 text-sky-400 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
