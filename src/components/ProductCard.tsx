import { MessageCircle, Radio, Battery, Shield } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  specs: {
    label: string;
    value: string;
    icon: 'battery' | 'shield' | 'radio';
  }[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "1234567890"; // Reemplazar con numero real
  const message = encodeURIComponent(`Hola, quisiera cotizar el equipo ${product.name}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'battery': return <Battery size={16} />;
      case 'shield': return <Shield size={16} />;
      case 'radio': return <Radio size={16} />;
      default: return <Radio size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-64 bg-slate-100 flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/50"></div>
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Radio size={80} className="text-slate-300 relative z-10 group-hover:scale-110 transition-transform duration-500" />
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-2">MOTOROLA SOLUTIONS</span>
          <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
        </div>
        <p className="text-slate-600 text-sm mb-6 flex-grow">{product.description}</p>
        
        <div className="space-y-3 mb-8">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-orange-500">{getIcon(spec.icon)}</span>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{spec.label}</p>
                <p className="text-sm font-medium">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1ebd60] text-white px-4 py-3.5 rounded-lg font-bold transition-colors duration-200 mt-auto shadow-sm"
        >
          <MessageCircle size={20} />
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
}
