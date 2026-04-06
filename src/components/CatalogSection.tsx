import ProductCard, { type Product } from './ProductCard';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'dep450',
    name: 'Motorola DEP450',
    image: '', // Empty to use the Radio icon placeholder
    description: 'Radio portátil digital de dos vías. Simple y eficaz para usuarios que necesitan conectividad básica y confiabilidad superior en el campo.',
    specs: [
      { label: 'Autonomía', value: 'Hasta 14.5 hrs', icon: 'battery' },
      { label: 'Protección', value: 'IP54 (Polvo y agua)', icon: 'shield' }
    ]
  },
  {
    id: 'dgm8500',
    name: 'Motorola DGM8500e',
    image: '', // Empty to use the Radio icon placeholder
    description: 'Radio móvil con GPS y Bluetooth integrado, ideal para flotas de vehículos mineros y centros de control avanzado.',
    specs: [
      { label: 'Red', value: 'UHF / VHF / 800 MHz', icon: 'radio' },
      { label: 'Protección', value: 'IP54', icon: 'shield' }
    ]
  },
  {
    id: 'r7',
    name: 'Motorola MOTOTRBO R7',
    image: '', // Empty to use the Radio icon placeholder
    description: 'El nuevo estándar. Cancelación de ruido industrial adaptativa, robustez militar y rediseñado para la industria pesada.',
    specs: [
      { label: 'Batería', value: 'Hasta 28 hrs', icon: 'battery' },
      { label: 'Resistencia', value: 'IP68 / IP66 (Militar)', icon: 'shield' }
    ]
  },
  {
    id: 'placeholder-4',
    name: 'Equipo Modelo 4',
    image: '',
    description: 'Descripción del equipo 4. Espacio reservado para agregar detalles sobre la conectividad o rendimiento del modelo.',
    specs: [
      { label: 'Característica 1', value: 'Valor 1', icon: 'radio' },
      { label: 'Característica 2', value: 'Valor 2', icon: 'shield' }
    ]
  },
  {
    id: 'placeholder-5',
    name: 'Equipo Modelo 5',
    image: '',
    description: 'Descripción del equipo 5. Espacio reservado para agregar detalles sobre la conectividad o rendimiento del modelo.',
    specs: [
      { label: 'Característica 1', value: 'Valor 1', icon: 'battery' },
      { label: 'Característica 2', value: 'Valor 2', icon: 'radio' }
    ]
  },
  {
    id: 'placeholder-6',
    name: 'Equipo Modelo 6',
    image: '',
    description: 'Descripción del equipo 6. Espacio reservado para agregar detalles sobre la conectividad o rendimiento del modelo.',
    specs: [
      { label: 'Característica 1', value: 'Valor 1', icon: 'shield' },
      { label: 'Característica 2', value: 'Valor 2', icon: 'battery' }
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
