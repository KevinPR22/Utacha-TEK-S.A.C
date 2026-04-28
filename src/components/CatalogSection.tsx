import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard, { type Product } from './ProductCard';
import FadeIn from './FadeIn';

type SortOption = 'none' | 'a-z' | 'z-a' | 'newest';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'nad6502',
    name: 'Antena Motorola NAD6502',
    category: 'Equipos de Seguridad',
    brand: 'Motorola Solutions',
    image: '/NAD6502-ANTENA.jpg',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Antena de látigo flexible (Heliflex) de 15 cm para banda VHF. Repuesto original altamente compatible.',
    pdfUrl: '/fichas/NAD6502%20ANTENA.pdf',
    specs: [
      { label: 'Frecuencia', value: 'VHF 136-174 MHz', icon: 'radio' },
      { label: 'Compatibilidad', value: 'Serie DEP / EP / CP', icon: 'shield' }
    ]
  },
  {
    id: 'dem300',
    name: 'Motorola Serie DEM 300 / 400',
    category: 'Radios',
    brand: 'Motorola Solutions',
    isNew: true,
    image: '/demo300-400.png',
    badge: 'NUEVO - MOTOROLA',
    badgeClassName: 'bg-sky-100 text-sky-700',
    description: 'Radios móviles digitales y analógicos ideales para instalación en flotas de vehículos.',
    pdfUrl: '/fichas/RADIO%20DEM%20400.pdf',
    specs: [
      { label: 'Uso', value: 'Instalación en Vehículos', icon: 'radio' },
      { label: 'Protección', value: 'IP54', icon: 'shield' }
    ]
  },
  {
    id: 'r7',
    name: 'Motorola MOTOTRBO R7',
    category: 'Radios',
    brand: 'Motorola Solutions',
    isNew: true,
    image: '/r7-imagen.png',
    badge: 'NUEVO - MOTOROLA',
    badgeClassName: 'bg-sky-100 text-sky-700',
    description: 'Radio portátil UHF/VHF de 5W de potencia con cancelación de ruido avanzada.',
    pdfUrl: '/fichas/MOTOTRBO%20R7.pdf',
    specs: [
      { label: 'Resistencia', value: 'MIL-STD 810', icon: 'shield' },
      { label: 'Audio', value: 'Cancelación de ruido', icon: 'radio' }
    ]
  },
  {
    id: 'panel-solar-100w',
    name: 'Panel Solar Monocristalino 100W',
    category: 'Paneles Solares',
    brand: 'Otras Marcas',
    image: '', 
    badge: 'ENERGÍA RENOVABLE',
    badgeClassName: 'bg-green-50 text-green-700',
    description: 'Panel solar de alta eficiencia ideal para estaciones de telecomunicaciones remotas y sistemas aislados.',
    specs: [
      { label: 'Potencia', value: '100W', icon: 'sun' },
      { label: 'Eficiencia', value: 'Alta conversión', icon: 'battery' }
    ]
  },
  {
    id: 'camara-ptz',
    name: 'Cámara Domo PTZ Industrial',
    category: 'Cámaras de Vigilancia',
    brand: 'Otras Marcas',
    image: '', 
    badge: 'SEGURIDAD IP',
    badgeClassName: 'bg-blue-50 text-blue-700',
    description: 'Cámara de vigilancia PTZ con visión nocturna, rotación 360° y zoom óptico 30x para exteriores.',
    specs: [
      { label: 'Resolución', value: '4K Ultra HD', icon: 'camera' },
      { label: 'Protección', value: 'IP67 / IK10', icon: 'shield' }
    ]
  },
  {
    id: 'tx500',
    name: 'TXPRO TX-500',
    category: 'Radios',
    brand: 'TXPRO Professional',
    image: '/tx500-imagen.png',
    badge: 'TXPRO PROFESSIONAL',
    badgeClassName: 'bg-red-50 text-red-700',
    description: 'Radio portátil profesional con 5 Watts de potencia reales. Excelente alcance continuo.',
    pdfUrl: '/fichas/TX500.pdf',
    specs: [
      { label: 'Batería', value: '2500 mAh', icon: 'battery' },
      { label: 'Garantía', value: '2 Años', icon: 'shield' }
    ]
  },
  {
    id: 'r5',
    name: 'Motorola MOTOTRBO R5',
    category: 'Radios',
    brand: 'Motorola Solutions',
    image: '/MOTOTRBO-R5-cju.png',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Radio portátil UHF/VHF de 5W con tecnología DMR y cancelación de ruido SINC+.',
    pdfUrl: '/fichas/MOTOTRBO%20R5.pdf',
    specs: [
      { label: 'Resistencia', value: 'MIL-STD 810', icon: 'shield' },
      { label: 'Audio', value: 'Cancelación SINC+', icon: 'radio' }
    ]
  },
  {
    id: 'r2',
    name: 'Motorola MOTOTRBO R2',
    category: 'Radios',
    brand: 'Motorola Solutions',
    image: '/R2-VHF-FRONTAL.png',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Radio portátil UHF/VHF resistente de 5W, capacidad de 64 canales.',
    pdfUrl: '/fichas/MOTOTRBO%20R2.pdf',
    specs: [
      { label: 'Protección', value: 'IP55', icon: 'shield' },
      { label: 'Audio', value: 'Supresión SINC+', icon: 'radio' }
    ]
  },
  {
    id: 'hnn9008',
    name: 'Batería Motorola HNN9008',
    category: 'Equipos de Seguridad',
    brand: 'Motorola Solutions',
    image: '/HNN9008-BATERIA.jpg',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Batería NiMH de 7.2V conocida por su robustez en trabajo pesado.',
    pdfUrl: '/fichas/HNN9008%20BATERIA%20PRO5150.pdf',
    specs: [
      { label: 'Capacidad', value: '1500 mAh', icon: 'battery' },
      { label: 'Compatibilidad', value: 'Serie PRO/GP/HT', icon: 'shield' }
    ]
  },
  {
    id: 'rln5644',
    name: 'Clip Motorola RLN5644',
    category: 'Equipos de Seguridad',
    brand: 'Motorola Solutions',
    image: '/RLN5644-CLIP.jpg',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Clip de sujeción de 2 pulgadas de plástico de alto impacto con resorte metálico.',
    pdfUrl: '/fichas/RLN5644%20CLIP.pdf',
    specs: [
      { label: 'Compatibilidad', value: 'Serie DEP / EP / CP', icon: 'shield' },
      { label: 'Fijación', value: 'Acople a Batería', icon: 'battery' }
    ]
  }
];

// Opciones de filtro disponibles
const CATEGORY_OPTIONS = ['Radios', 'Paneles Solares', 'Cámaras de Vigilancia', 'Equipos de Seguridad'];
const BRAND_OPTIONS = ['Motorola Solutions', 'TXPRO Professional', 'Otras Marcas'];

interface CatalogSectionProps {
  onBackHome?: () => void;
}

export default function CatalogSection({ onBackHome }: CatalogSectionProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('none');
  
  // Estado para manejar qué sección de filtro está colapsada (como en el ejemplo de Adidas)
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    category: true,
    brand: true
  });

  const toggleSection = (section: 'sort' | 'category' | 'brand') => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleCategory = (cat: string) => {
    setActiveCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setActiveBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setActiveCategories([]);
    setActiveBrands([]);
    setSortBy('none');
  };

  const removeFilter = (type: 'category' | 'brand', value: string) => {
    if (type === 'category') toggleCategory(value);
    if (type === 'brand') toggleBrand(value);
  };

  // Prevenir scroll en el body cuando el panel está abierto
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterOpen]);

  // Filtrado y Ordenamiento usando useMemo para mejor rendimiento
  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    if (activeCategories.length > 0) {
      result = result.filter(p => activeCategories.includes(p.category));
    }
    
    if (activeBrands.length > 0) {
      result = result.filter(p => activeBrands.includes(p.brand));
    }

    if (sortBy === 'a-z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'z-a') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'newest') {
      // Los nuevos primero, si no tienen 'isNew', van después
      result.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    }

    return result;
  }, [activeCategories, activeBrands, sortBy]);

  const hasActiveFilters = activeCategories.length > 0 || activeBrands.length > 0 || sortBy !== 'none';

  return (
    <div className="min-h-screen bg-slate-50 pb-24 relative">
      {/* Imposing Dark Header for Catalog */}
      <section className="relative pt-24 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-600 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {onBackHome && (
            <button 
              onClick={onBackHome}
              className="mb-8 inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              Volver al inicio
            </button>
          )}

          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sky-400 font-bold tracking-wider uppercase text-sm mb-3 block">Catálogo Corporativo</span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Equipos Premium</h1>
              <p className="text-xl text-slate-300">
                Explore nuestra gama de soluciones de alta resistencia, diseñadas para operar sin fallos en los entornos industriales más extremos.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Control Bar (Replaces old pills) */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-slate-600 font-medium">
            Mostrando <span className="text-slate-900 font-bold">{filteredProducts.length}</span> equipos
          </p>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md"
          >
            <SlidersHorizontal size={18} />
            Filtrar y Ordenar
            {hasActiveFilters && (
              <span className="ml-1 flex items-center justify-center w-5 h-5 bg-sky-500 text-white rounded-full text-xs">
                {(activeCategories.length + activeBrands.length + (sortBy !== 'none' ? 1 : 0))}
              </span>
            )}
          </button>
        </div>
      </section>

      {/* Sidebar Overlay */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}

      {/* Slide-over Panel (Adidas style) */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-wide">Filtrar y Ordenar</h2>
          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-sm font-bold text-slate-900 underline hover:text-sky-600">
                Borrar todo
              </button>
            )}
            <button onClick={() => setIsFilterOpen(false)} className="text-slate-500 hover:text-slate-900">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Sidebar Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          
          {/* Active Filters */}
          {(activeCategories.length > 0 || activeBrands.length > 0) && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Filtros aplicados</h3>
              <div className="flex flex-wrap gap-2">
                {activeCategories.map(cat => (
                  <button 
                    key={`cat-${cat}`}
                    onClick={() => removeFilter('category', cat)}
                    className="flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-full text-sm hover:border-slate-400 hover:bg-slate-50 transition-colors"
                  >
                    <X size={14} /> {cat}
                  </button>
                ))}
                {activeBrands.map(brand => (
                  <button 
                    key={`brand-${brand}`}
                    onClick={() => removeFilter('brand', brand)}
                    className="flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-full text-sm hover:border-slate-400 hover:bg-slate-50 transition-colors"
                  >
                    <X size={14} /> {brand}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sort Section */}
          <div className="border-b border-slate-100 pb-6">
            <button 
              className="flex justify-between items-center w-full text-left font-bold text-slate-900 text-lg mb-4"
              onClick={() => toggleSection('sort')}
            >
              Ordenar por
              {expandedSections.sort ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections.sort && (
              <div className="space-y-4 mt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sort" 
                    checked={sortBy === 'newest'} 
                    onChange={() => setSortBy('newest')}
                    className="w-5 h-5 accent-slate-900" 
                  />
                  <span className="text-slate-700 group-hover:text-slate-900">Novedades</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sort" 
                    checked={sortBy === 'a-z'} 
                    onChange={() => setSortBy('a-z')}
                    className="w-5 h-5 accent-slate-900" 
                  />
                  <span className="text-slate-700 group-hover:text-slate-900">Alfabéticamente (A-Z)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sort" 
                    checked={sortBy === 'z-a'} 
                    onChange={() => setSortBy('z-a')}
                    className="w-5 h-5 accent-slate-900" 
                  />
                  <span className="text-slate-700 group-hover:text-slate-900">Alfabéticamente (Z-A)</span>
                </label>
              </div>
            )}
          </div>

          {/* Category Section */}
          <div className="border-b border-slate-100 pb-6">
            <button 
              className="flex justify-between items-center w-full text-left font-bold text-slate-900 text-lg mb-4"
              onClick={() => toggleSection('category')}
            >
              Categoría
              {expandedSections.category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections.category && (
              <div className="grid grid-cols-2 gap-3 mt-2">
                {CATEGORY_OPTIONS.map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`py-3 px-2 rounded-lg border text-sm font-medium transition-all text-center ${
                      activeCategories.includes(cat) 
                        ? 'border-slate-900 bg-slate-900 text-white' 
                        : 'border-slate-300 bg-white text-slate-700 hover:border-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Brand Section */}
          <div className="pb-6">
            <button 
              className="flex justify-between items-center w-full text-left font-bold text-slate-900 text-lg mb-4"
              onClick={() => toggleSection('brand')}
            >
              Marca
              {expandedSections.brand ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections.brand && (
              <div className="space-y-4 mt-2">
                {BRAND_OPTIONS.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={activeBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-5 h-5 rounded border-slate-300 text-slate-900 accent-slate-900 focus:ring-slate-900" 
                    />
                    <span className="text-slate-700 group-hover:text-slate-900">{brand}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-slate-200 bg-white">
          <p className="text-sm text-slate-500 mb-4">{filteredProducts.length} artículos encontrados</p>
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 px-6 flex justify-between items-center transition-colors shadow-lg"
          >
            <span>Mostrar artículos</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Catalog Content */}
      <section id="catalog-content" className="pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <FadeIn key={product.id} direction="up" delay={(index % 6) * 100}>
                  <ProductCard product={product} />
                </FadeIn>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-xl font-medium">No se encontraron productos con estos filtros.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 text-sky-600 font-bold underline hover:text-sky-700"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
