<<<<<<< HEAD
import { MessageCircle, Radio, Battery, Shield, Sun, Camera, FileText } from 'lucide-react';
=======
import { MessageCircle, Radio, Battery, Shield } from 'lucide-react';
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115

export interface Product {
  id: string;
  name: string;
<<<<<<< HEAD
  category: string;
  brand: string;
  isNew?: boolean;
=======
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
  image: string;
  description: string;
  badge?: string;
  badgeClassName?: string;
<<<<<<< HEAD
  pdfUrl?: string; // Nuevo campo para el enlace al PDF
  specs: {
    label: string;
    value: string;
    icon: 'battery' | 'shield' | 'radio' | 'sun' | 'camera';
=======
  specs: {
    label: string;
    value: string;
    icon: 'battery' | 'shield' | 'radio';
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
  }[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "51989721843";
  const message = encodeURIComponent(`Hola, quisiera cotizar el equipo ${product.name}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'battery': return <Battery size={16} />;
      case 'shield': return <Shield size={16} />;
      case 'radio': return <Radio size={16} />;
<<<<<<< HEAD
      case 'sun': return <Sun size={16} />;
      case 'camera': return <Camera size={16} />;
=======
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
      default: return <Radio size={16} />;
    }
  };

  return (
<<<<<<< HEAD
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:border-sky-200 transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2 ring-1 ring-slate-900/5">
      <div className="relative h-72 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
        
=======
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-64 bg-slate-100 flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/50"></div>
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
<<<<<<< HEAD
            className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
          />
        ) : (
          <Radio size={80} className="text-slate-300 relative z-10 group-hover:scale-110 group-hover:text-sky-300 transition-all duration-700" />
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative bg-white">
        {/* Top subtle line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 shadow-sm ${product.badgeClassName || 'bg-slate-100 text-slate-600'}`}>
            {product.badge || 'MOTOROLA SOLUTIONS'}
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">{product.name}</h3>
        </div>
        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
        
        <div className="space-y-3 mb-6">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-sky-100 group-hover:bg-sky-50/50 transition-colors duration-300">
              <span className="text-sky-600 bg-white p-1.5 rounded-lg shadow-sm">{getIcon(spec.icon)}</span>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{spec.label}</p>
                <p className="text-sm font-semibold">{spec.value}</p>
=======
            className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Radio size={80} className="text-slate-300 relative z-10 group-hover:scale-110 transition-transform duration-500" />
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className={`inline-block px-2 py-1 text-xs font-bold rounded mb-2 ${product.badgeClassName || 'bg-slate-100 text-slate-600'}`}>
            {product.badge || 'MOTOROLA SOLUTIONS'}
          </span>
          <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
        </div>
        <p className="text-slate-600 text-sm mb-6 flex-grow">{product.description}</p>
        
        <div className="space-y-3 mb-8">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-sky-600">{getIcon(spec.icon)}</span>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{spec.label}</p>
                <p className="text-sm font-medium">{spec.value}</p>
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
              </div>
            </div>
          ))}
        </div>
        
<<<<<<< HEAD
        <div className="mt-auto space-y-3">
          {product.pdfUrl && (
            <a 
              href={product.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold transition-all duration-300 border border-slate-200"
            >
              <FileText size={20} className="text-slate-500" />
              Ver Ficha Técnica
            </a>
          )}
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1ebd60] text-white px-4 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95"
          >
            <MessageCircle size={22} />
            Cotizar por WhatsApp
          </a>
        </div>
=======
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1ebd60] text-white px-4 py-3.5 rounded-lg font-bold transition-colors duration-200 mt-auto shadow-sm"
        >
          <MessageCircle size={20} />
          Cotizar por WhatsApp
        </a>
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
      </div>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> cff861f224f430fb0e89d8c8e523784f5fb51115
