import ProductCard, { type Product } from './ProductCard';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'nad6502',
    name: 'Antena Motorola NAD6502',
    image: '/NAD6502-ANTENA.jpg',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Antena de látigo flexible (Heliflex) de 15 cm para banda VHF. Repuesto original con conector de tornillo, altamente compatible con la serie DEP450, EP450 y CP.',
    specs: [
      { label: 'Frecuencia', value: 'VHF 136-174 MHz', icon: 'radio' },
      { label: 'Compatibilidad', value: 'Serie DEP / EP / CP', icon: 'shield' }
    ]
  },
  {
    id: 'dem300',
    name: 'Motorola Serie DEM 300 / 400',
    image: '/demo300-400.png',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Radios móviles digitales y analógicos ideales para instalación en flotas de vehículos. Diseñados para choferes habituales, ofrecen comunicación clara sin distracciones y diseño resistente IP54.',
    specs: [
      { label: 'Uso', value: 'Instalación en Vehículos', icon: 'radio' },
      { label: 'Protección', value: 'IP54 (Polvo y salpicaduras)', icon: 'shield' }
    ]
  },
  {
    id: 'r7',
    name: 'Motorola MOTOTRBO R7',
    image: '/r7-imagen.png',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Radio portátil UHF/VHF de 5W de potencia. Cuenta con pantalla QVGA, cancelación de ruido avanzada y diseño intrínsecamente seguro para operaciones de misión crítica.',
    specs: [
      { label: 'Resistencia', value: 'Militar (MIL-STD 810)', icon: 'shield' },
      { label: 'Audio', value: 'Cancelación de ruido', icon: 'radio' }
    ]
  },
  {
    id: 'tx500',
    name: 'TXPRO TX-500',
    image: '/tx500-imagen.png',
    badge: 'TXPRO PROFESSIONAL',
    badgeClassName: 'bg-red-50 text-red-700',
    description: 'Radio portátil profesional con 5 Watts de potencia reales. Diseñado para ofrecer la mejor calidad y alcance continuo en entornos de trabajo exigentes.',
    specs: [
      { label: 'Batería', value: '2500 mAh', icon: 'battery' },
      { label: 'Garantía', value: '2 Años', icon: 'shield' }
    ]
  },
  {
    id: 'r5',
    name: 'Motorola MOTOTRBO R5',
    image: '/MOTOTRBO-R5-cju.png',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Radio portátil UHF/VHF de 5W con capacidad de 64 canales. Incorpora tecnología DMR y cancelación de ruido SINC+ para comunicaciones nítidas y robustas.',
    specs: [
      { label: 'Resistencia', value: 'Militar (MIL-STD 810)', icon: 'shield' },
      { label: 'Audio', value: 'Cancelación SINC+', icon: 'radio' }
    ]
  },
  {
    id: 'r2',
    name: 'Motorola MOTOTRBO R2',
    image: '/R2-VHF-FRONTAL.png',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Radio portátil UHF/VHF de uso diario fiable y resistente. Cuenta con 5W de potencia, capacidad de 64 canales y formato ergonómico para un día de trabajo ininterrumpido.',
    specs: [
      { label: 'Protección', value: 'IP55 (Polvo y agua)', icon: 'shield' },
      { label: 'Audio', value: 'Supresión SINC+', icon: 'radio' }
    ]
  },
  {
    id: 'hnn9008',
    name: 'Batería Motorola HNN9008',
    image: '/HNN9008-BATERIA.jpg',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Batería NiMH de 7.2V conocida por su robustez en trabajo pesado. Capacidad de hasta 1500 mAh y protección IP54 contra polvo y salpicaduras. Compatible con series PRO, GP, HT y MTX.',
    specs: [
      { label: 'Capacidad', value: '1500 mAh (NiMH)', icon: 'battery' },
      { label: 'Compatibilidad', value: 'Serie PRO/GP/HT', icon: 'shield' }
    ]
  },
  {
    id: 'rln5644',
    name: 'Clip de Cinturón Motorola RLN5644',
    image: '/RLN5644-CLIP.jpg',
    badge: 'MOTOROLA SOLUTIONS',
    badgeClassName: 'bg-slate-100 text-slate-600',
    description: 'Clip de sujeción de 2 pulgadas fabricado en plástico de alto impacto con mecanismo metálico de resorte (Spring Action). Permite un acople rápido y seguro.',
    specs: [
      { label: 'Compatibilidad', value: 'Serie DEP / EP / CP', icon: 'shield' },
      { label: 'Fijación', value: 'Acople a Batería', icon: 'battery' }
    ]
  }
];

export default function CatalogSection() {
  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold tracking-wider uppercase text-sm mb-2 block">Catálogo Corporativo</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Equipos Destacados</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones de comunicación robustas construidas para superar los desafíos más extremos de su operación en cualquier terreno libre de interferencias.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
