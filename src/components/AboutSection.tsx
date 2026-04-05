import { Mountain, Cpu } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nuestro ADN</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Mountain size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">UTA <span className="text-slate-500 text-lg font-medium ml-1">| Refugio</span></h3>
            <p className="text-slate-600 leading-relaxed">
              En la herencia andina, "Uta" representa el refugio y la fortaleza frente a la adversidad. Proveemos la confianza de estar siempre conectado, incluso en los entornos más aislados e inhóspitos.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6">
              <Cpu size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">TEK <span className="text-slate-500 text-lg font-medium ml-1">| Tecnología</span></h3>
            <p className="text-slate-600 leading-relaxed">
              La vanguardia industrial global adaptada al terreno agreste. Integramos los estándares tecnológicos más altos para asegurar comunicaciones nítidas, seguras y sin interrupciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
