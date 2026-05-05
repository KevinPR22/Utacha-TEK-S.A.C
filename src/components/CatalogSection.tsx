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
    id: 'trina-605wp',
    name: 'Panel Monofacial Trina Solar FV 605Wp',
    category: 'Paneles Solares',
    brand: 'Trina Solar',
    isNew: true,
    image: '/products/paneles-solares/trina-605wp.jpg', 
    badge: 'NUEVO - TRINA SOLAR',
    badgeClassName: 'bg-sky-100 text-sky-700',
    description: 'Panel fotovoltaico de 605Wp con tecnología Half-Cut Cell. Minimiza pérdidas internas y optimiza la producción en sombras parciales.',
    pdfUrl: '/fichas/paneles-solares/trina-605wp.pdf',
    specs: [
      { label: 'POTENCIA', value: '605 Wp', icon: 'zap' },
      { label: 'TECNOLOGÍA', value: 'Half-Cut Cell', icon: 'grid' }
    ]
  },
  {
    id: 'jinko-620wp-bifacial',
    name: 'Panel Solar Jinko Tiger Neo N-type 620 Wp Bifacial',
    category: 'Paneles Solares',
    brand: 'Jinko Solar',
    image: '/products/paneles-solares/jinko-620wp.jpg',
    badge: 'JINKO SOLAR',
    badgeClassName: 'bg-emerald-100 text-emerald-700',
    description: 'Módulo bifacial con tecnología N-type y doble vidrio que genera energía por ambas caras. Ofrece una eficiencia del 22.95%, ideal para proyectos que buscan máxima potencia y confiabilidad extrema.',
    pdfUrl: '/fichas/paneles-solares/jinko-620wp.pdf',
    specs: [
      { label: 'POTENCIA', value: '620 Wp', icon: 'zap' },
      { label: 'TECNOLOGÍA', value: 'N-type Bifacial', icon: 'layers' }
    ]
  },
  {
    id: 'nvs-200w-plegable',
    name: 'Panel Solar NVS Monocristalino Plegable Ligero de 200W',
    category: 'Paneles Solares',
    brand: 'NVS',
    image: '/products/paneles-solares/nvs-200w.jpg',
    badge: 'NVS',
    badgeClassName: 'bg-amber-100 text-amber-700',
    description: 'Solución portátil y ultraligera diseñada para aplicaciones móviles, campamentos y sistemas off-grid. Destaca por su diseño sin marco rígido y peso de solo 8 kg, facilitando su transporte e instalación.',
    pdfUrl: '/fichas/paneles-solares/nvs-200w.pdf',
    specs: [
      { label: 'POTENCIA', value: '200 W', icon: 'zap' },
      { label: 'DISEÑO', value: 'Plegable (8 kg)', icon: 'briefcase' }
    ]
  },
  {
    id: 'nvs-200w-plegable-rigido',
    name: 'Panel Solar NVS 200Wp Monocristalino Plegable',
    category: 'Paneles Solares',
    brand: 'NVS',
    image: '/products/paneles-solares/nvs-200w-rigido.png',
    badge: 'NVS',
    badgeClassName: 'bg-amber-100 text-amber-700',
    description: 'Solución portátil con marco rígido ideal para campamentos, vehículos recreativos y sistemas off-grid. Incluye patas telescópicas de acero inoxidable para una instalación estable y óptima orientación.',
    pdfUrl: '/fichas/paneles-solares/nvs-200w-rigido.pdf',
    specs: [
      { label: 'POTENCIA', value: '200 W', icon: 'zap' },
      { label: 'ESTRUCTURA', value: 'Marco Rígido (18 kg)', icon: 'shield' }
    ]
  },
  {
    id: 'victron-phoenix-48-1200',
    name: 'Victron Energy Inversor Phoenix VE.Direct 48/1200 230V Schuko',
    category: 'Inversores Off Grid',
    brand: 'Victron Energy',
    image: '/products/inversores-off-grid/victron-phoenix.jpg',
    badge: 'VICTRON ENERGY',
    badgeClassName: 'bg-blue-100 text-blue-700',
    description: 'Inversor de corriente (DC a AC) diseñado para generar una salida de 230 V AC con enchufe tipo Schuko (estilo europeo). Ideal para uso en sistemas con baterías de 48 V.',
    pdfUrl: '/fichas/inversores-off-grid/victron-phoenix.pdf',
    specs: [
      { label: 'BATERÍA', value: '48 V', icon: 'battery' },
      { label: 'SALIDA', value: '230 V AC', icon: 'plug' }
    ]
  },
  {
    id: 'victron-phoenix-24-500',
    name: 'Victron Energy Inversor Phoenix VE.Direct 24/500',
    category: 'Inversores Off Grid',
    brand: 'Victron Energy',
    image: '/products/inversores-off-grid/victron-phoenix-500.png',
    badge: 'VICTRON ENERGY',
    badgeClassName: 'bg-blue-100 text-blue-700',
    description: 'Inversor de onda senoidal pura con topología de puente completo y transformador toroidal para máxima fiabilidad. Ofrece 500VA de potencia con puerto de comunicación VE.Direct para monitoreo.',
    pdfUrl: '/fichas/inversores-off-grid/victron-phoenix-500.pdf',
    specs: [
      { label: 'BATERÍA', value: '24 V', icon: 'battery' },
      { label: 'POTENCIA', value: '500 VA', icon: 'zap' }
    ]
  },
  {
    id: 'victron-phoenix-12-1200',
    name: 'Victron Energy Inversor Phoenix VE.Direct 12/1200',
    category: 'Inversores Off Grid',
    brand: 'Victron Energy',
    image: '/products/inversores-off-grid/victron-phoenix-12-1200.png',
    badge: 'VICTRON ENERGY',
    badgeClassName: 'bg-blue-100 text-blue-700',
    description: 'Inversor de onda senoidal pura con capacidad continua de 1200 VA y picos de potencia de hasta 2200 W. Incorpora puerto VE.Direct para monitoreo y configuración mediante smartphone.',
    pdfUrl: '/fichas/inversores-off-grid/Ficha-tecnica-3003017.pdf',
    specs: [
      { label: 'BATERÍA', value: '12 V', icon: 'battery' },
      { label: 'POTENCIA', value: '1200 VA', icon: 'zap' }
    ]
  },
  {
    id: 'victron-phoenix-12-250',
    name: 'Victron E. Phoenix 12/250 230V VE.Direct IEC',
    category: 'Inversores Off Grid',
    brand: 'Victron Energy',
    image: '/products/inversores-off-grid/victron-phoenix-12-250.png',
    badge: 'VICTRON ENERGY',
    badgeClassName: 'bg-blue-100 text-blue-700',
    description: 'Inversor con topología de puente completo y transformador toroidal para alta fiabilidad. Incluye Modo ECO para reducir el consumo de energía y puerto VE.Direct para monitoreo y configuración total mediante VictronConnect.',
    pdfUrl: '/fichas/inversores-off-grid/victron-phoenix-12-250.pdf',
    specs: [
      { label: 'BATERÍA', value: '12 V', icon: 'battery' },
      { label: 'POTENCIA', value: '250 VA', icon: 'zap' }
    ]
  },
  {
    id: 'victron-phoenix-smart-1600',
    name: 'Victron Phoenix Inverter Smart 1600VA',
    category: 'Inversores Off Grid',
    brand: 'Victron Energy',
    image: '/products/inversores-off-grid/victron-phoenix-smart-1600.png',
    badge: 'VICTRON ENERGY',
    badgeClassName: 'bg-blue-100 text-blue-700',
    description: 'Inversor inteligente con Bluetooth incorporado, totalmente configurable mediante tableta o smartphone. Cuenta con topología de puente completo, alta potencia de arranque y puerto VE.Direct para una integración total.',
    pdfUrl: '/fichas/inversores-off-grid/victron-phoenix-smart.pdf',
    specs: [
      { label: 'POTENCIA', value: '1600 VA', icon: 'zap' },
      { label: 'CONECTIVIDAD', value: 'Bluetooth', icon: 'smartphone' }
    ]
  },
  {
    id: 'victron-phoenix-12-375',
    name: 'Victron Energy Inversor Phoenix VE.Direct 12/375',
    category: 'Inversores Off Grid',
    brand: 'Victron Energy',
    image: '/products/inversores-off-grid/victron-phoenix-12-375.png',
    badge: 'VICTRON ENERGY',
    badgeClassName: 'bg-blue-100 text-blue-700',
    description: 'Inversor de onda senoidal pura que ofrece 375 VA de potencia continua. Incluye puerto de comunicación VE.Direct para monitoreo completo y Modo ECO para optimizar el consumo de energía.',
    pdfUrl: '/fichas/inversores-off-grid/victron-phoenix-12-375.pdf',
    specs: [
      { label: 'BATERÍA', value: '12 V', icon: 'battery' },
      { label: 'POTENCIA', value: '375 VA', icon: 'zap' }
    ]
  },
  {
    id: 'antena-movil-lmg-450',
    name: 'LMG 450 Antena Móvil UHF',
    category: 'Antenas',
    brand: 'LMG',
    image: '/products/antenas/antena-lmg-450.png',
    badge: 'ANTENA MÓVIL',
    badgeClassName: 'bg-slate-100 text-slate-700',
    description: 'Antena móvil UHF con 200W de potencia y latiguillo de acero inoxidable 17-7 ph. Cuenta con una longitud de 93cm, impedancia de 50 Ohms y un ancho de banda de 15 MHz.',
    pdfUrl: '/fichas/antenas/antena-lmg-450.pdf',
    specs: [
      { label: 'POTENCIA', value: '200 W', icon: 'zap' },
      { label: 'LONGITUD', value: '93 cm', icon: 'ruler' }
    ]
  },
  {
    id: 'antena-movil-lmg-150',
    name: 'LMG 150 Antena Móvil VHF',
    category: 'Antenas',
    brand: 'LMG',
    image: '/products/antenas/antena-lmg-150.png',
    badge: 'ANTENA MÓVIL',
    badgeClassName: 'bg-slate-100 text-slate-700',
    description: 'Antena móvil VHF con 200W de potencia y latiguillo de acero inoxidable 17-7 ph. Cuenta con una longitud de 129cm, impedancia de 50 Ohms y un ancho de banda de 6 MHz.',
    pdfUrl: '/fichas/antenas/lmg-150.pdf',
    specs: [
      { label: 'POTENCIA', value: '200 W', icon: 'zap' },
      { label: 'LONGITUD', value: '129 cm', icon: 'ruler' }
    ]
  },
  {
    id: 'antena-base-g7-serie',
    name: 'Serie G7: Antena Base G7-2 (UHF) / G7-3 (VHF)',
    category: 'Antenas',
    brand: 'Hustler',
    image: '/products/antenas/antenas-g7.png',
    badge: 'ANTENA BASE',
    badgeClassName: 'bg-indigo-100 text-indigo-700',
    description: 'Antenas base omnidireccionales de 600W de potencia. Disponibles en versión UHF (G7-2: 154-161 MHz, 4.35m) y VHF (G7-3: 161-167 MHz, 4.3m). Ambas ofrecen un ancho de banda de 3 MHz.',
    pdfUrl: '/fichas/antenas/antenas-g7.pdf',
    specs: [
      { label: 'POTENCIA', value: '600 W', icon: 'zap' },
      { label: 'VERSIONES', value: 'UHF / VHF', icon: 'antenna' }
    ]
  },
  {
    id: 'fronius-primo-serie',
    name: 'Inversor de Red Fronius Primo',
    category: 'Inversores de Red',
    brand: 'Fronius',
    image: '/products/inversores-de-red/fronius-primo.png',
    badge: 'FRONIUS',
    badgeClassName: 'bg-red-100 text-red-700',
    description: 'Inversor monofásico ideal para el hogar con tecnología SnapINverter y diseño SuperFlex. Cuenta con doble seguidor MPPT, comunicación WLAN/Ethernet integrada y opción de inyección cero al combinarse con un Smart Meter.',
    pdfUrl: '/fichas/inversores-de-red/fronius-primo.pdf',
    specs: [
      { label: 'RANGO', value: '3.0 - 8.2 kW', icon: 'zap' },
      { label: 'MPPT', value: '2 Seguidores', icon: 'git-branch' }
    ]
  },
  {
    id: 'huawei-sun2000-330ktl',
    name: 'Huawei SUN2000-330KTL-H1 Smart String Inverter',
    category: 'Inversores de Red',
    brand: 'Huawei',
    image: '/products/inversores-de-red/huawei-330ktl.png',
    badge: 'HUAWEI',
    badgeClassName: 'bg-slate-100 text-slate-800',
    description: 'Inversor trifásico inteligente de alta capacidad con 300 kW de potencia nominal y 6 seguidores MPPT. Destaca por su alta eficiencia (≥99.0%), protección IP66 y funciones avanzadas como el diagnóstico inteligente de curva IV.',
    pdfUrl: '/fichas/inversores-de-red/inversor-330-huawei.pdf',
    specs: [
      { label: 'POTENCIA MÁX.', value: '330 kVA', icon: 'zap' },
      { label: 'MPPT', value: '6 Seguidores', icon: 'git-branch' }
    ]
  },
  {
    id: 'huawei-sun2000-100ktl',
    name: 'Huawei SUN2000-100KTL-M2 Smart PV Controller',
    category: 'Inversores de Red',
    brand: 'Huawei',
    image: '/products/inversores-de-red/huawei-100ktl.png',
    badge: 'HUAWEI',
    badgeClassName: 'bg-slate-100 text-slate-800',
    description: 'Inversor trifásico inteligente con 100 kW de potencia nominal y 10 seguidores MPPT independientes. Alcanza una eficiencia máxima del 98.8% y cuenta con protección IP66, además de integrar soporte para diagnóstico inteligente de curva I-V.',
    pdfUrl: '/fichas/inversores-de-red/inversor-100-huawei.pdf',
    specs: [
      { label: 'POTENCIA MÁX.', value: '110 kVA', icon: 'zap' },
      { label: 'MPPT', value: '10 Seguidores', icon: 'git-branch' }
    ]
  },
  {
    id: 'huawei-sun2000-50ktl',
    name: 'Huawei SUN2000-50KTL-M3 Smart PV Controller',
    category: 'Inversores de Red',
    brand: 'Huawei',
    image: '/products/inversores-de-red/Red%20Huawei%20SUN2000.png',
    badge: 'HUAWEI',
    badgeClassName: 'bg-slate-100 text-slate-800',
    description: 'Inversor trifásico inteligente con 50 kW de potencia nominal y 4 seguidores MPPT independientes. Integra protección activa contra arcos eléctricos con IA, grado de protección IP66 y compatibilidad con optimizadores.',
    pdfUrl: '/fichas/inversores-de-red/SUN2000-100ktl-m2-datasheet-20230506.pdf',
    specs: [
      { label: 'POTENCIA MÁX.', value: '55 kVA', icon: 'zap' },
      { label: 'MPPT', value: '4 Seguidores', icon: 'git-branch' }
    ]
  },
  {
    id: 'huawei-sun2000-5ktl-l1',
    name: 'Huawei SUN2000-5KTL-L1 Smart Energy Center',
    category: 'Inversores de Red',
    brand: 'Huawei',
    image: '/products/inversores-de-red/Red%20Huawei%20SUN2000%2050.png',
    badge: 'HUAWEI',
    badgeClassName: 'bg-slate-100 text-slate-800',
    description: 'Inversor monofásico híbrido de 5 kW compatible con baterías de litio (LG Chem o Huawei ESS). Destaca por su seguridad activa con protección contra arcos eléctricos por IA y capacidad para ofrecer hasta 5kW de salida CA más 5kW de carga en baterías simultáneamente.',
    pdfUrl: '/fichas/inversores-de-red/SUN2000-50KTL-M3-20230908.pdf',
    specs: [
      { label: 'POTENCIA CA', value: '5 kW', icon: 'zap' },
      { label: 'BATERÍA', value: 'Compatible', icon: 'battery' }
    ]
  },
  {
    id: 'huawei-sun2000-20ktl-m5',
    name: 'Huawei SUN2000-20KTL-M5 Smart PV Controller',
    category: 'Inversores de Red',
    brand: 'Huawei',
    image: '/products/inversores-de-red/huawei-20ktl-m5.png',
    badge: 'HUAWEI',
    badgeClassName: 'bg-slate-100 text-slate-800',
    description: 'Inversor trifásico de 20 kW con 2 seguidores MPPT independientes. Incorpora protección activa contra arcos eléctricos impulsada por IA y ofrece hasta un 30% más de energía al usarse de la mano con optimizadores.',
    pdfUrl: '/fichas/inversores-de-red/huawei-20ktl-m5.pdf',
    specs: [
      { label: 'POTENCIA CA', value: '20 kW', icon: 'zap' },
      { label: 'MPPT', value: '2 Seguidores', icon: 'git-branch' }
    ]
  },
  {
    id: 'fronius-symo-advanced',
    name: 'Fronius Symo Advanced',
    category: 'Inversores de Red',
    brand: 'Fronius',
    image: '/products/inversores-de-red/fronius-symo-advanced.png',
    badge: 'FRONIUS',
    badgeClassName: 'bg-red-100 text-red-700',
    description: 'Inversor trifásico ideal para aplicaciones comerciales, disponible en modelos con potencias desde 10kW hasta 24kW. Integra un transmisor PLC que cumple el estándar de comunicación SunSpec Rapid Shutdown y cuenta con diseño SuperFlex.',
    pdfUrl: '/fichas/inversores-de-red/fronius-symo-advanced.pdf',
    specs: [
      { label: 'RANGO', value: '10 - 24 kW', icon: 'zap' },
      { label: 'MPPT', value: '2 Seguidores', icon: 'git-branch' }
    ]
  },
  {
    id: 'huawei-luna2000-s1',
    name: 'Huawei LUNA2000-S1 Smart String ESS',
    category: 'Baterías',
    brand: 'Huawei',
    image: '/products/baterias/huawei-luna2000-s1.png',
    badge: 'HUAWEI',
    badgeClassName: 'bg-slate-100 text-slate-800',
    description: 'Sistema inteligente de almacenamiento con módulos escalables de 6.9 kWh hasta 20.7 kWh por grupo. Utiliza celdas de litio-ferrofosfato (LiFePO4) con 100% de profundidad de descarga y cuenta con protección de seguridad de 5 capas.',
    pdfUrl: '/fichas/baterias/huawei-luna2000-s1.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '6.9 - 20.7 kWh', icon: 'battery' },
      { label: 'QUÍMICA', value: 'LiFePO4', icon: 'shield' }
    ]
  },
  {
    id: 'huawei-luna2000-s0',
    name: 'Huawei LUNA2000-S0 Smart String ESS',
    category: 'Baterías',
    brand: 'Huawei',
    image: '/products/baterias/huawei-luna2000-s0.png',
    badge: 'HUAWEI',
    badgeClassName: 'bg-slate-100 text-slate-800',
    description: 'Sistema de almacenamiento inteligente con diseño modular de 5 kWh, escalable desde 5 hasta 30 kWh. Ofrece 100% de profundidad de descarga, optimización de energía a nivel de pack y celdas de litio-ferrofosfato (LiFePO4) con protección de 5 capas.',
    pdfUrl: '/fichas/baterias/huawei-luna2000-s0.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '5 - 30 kWh', icon: 'battery-full' },
      { label: 'QUÍMICA', value: 'LiFePO4', icon: 'shield' }
    ]
  },
  {
    id: 'telperion-gel-12v-200ah',
    name: 'Batería GEL Telperion 12V 200Ah',
    category: 'Baterías',
    brand: 'Telperion',
    image: '/products/baterias/telperion-gel-200ah.png',
    badge: 'TELPERION',
    badgeClassName: 'bg-gray-100 text-gray-800',
    description: 'Batería de GEL de ciclo profundo con 12V de tensión nominal y 200Ah de capacidad. Ofrece alta resistencia a la corrosión, excelente capacidad de descarga en ciclo profundo y una vida útil de diseño de hasta 10 años.',
    pdfUrl: '/fichas/baterias/telperion-gel-200ah.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '200 Ah', icon: 'battery' },
      { label: 'VOLTAJE', value: '12 V', icon: 'zap' }
    ]
  },
  {
    id: 'telperion-gel-premium-12v-200ah',
    name: 'Batería Premium GEL Telperion 12V 200Ah C10',
    category: 'Baterías',
    brand: 'Telperion',
    image: '/products/baterias/telperion-gel-premium-200ah.png',
    badge: 'PREMIUM - TELPERION',
    badgeClassName: 'bg-slate-800 text-yellow-400',
    description: 'Batería Premium GEL de ciclo profundo con 12V de tensión nominal y 200Ah de capacidad (C10). Diseñada con electrolito coloidal de nanosílice para un rendimiento superior en temperaturas extremas, ofreciendo una vida útil de diseño de hasta 12 años.',
    pdfUrl: '/fichas/baterias/telperion-gel-premium-200ah.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '200 Ah (C10)', icon: 'battery' },
      { label: 'VOLTAJE', value: '12 V', icon: 'zap' }
    ]
  },
  {
    id: 'telperion-gel-12v-150ah',
    name: 'Batería GEL Telperion 12V 150Ah C20',
    category: 'Baterías',
    brand: 'Telperion',
    image: '/products/baterias/telperion-gel-150ah.png',
    badge: 'TELPERION',
    badgeClassName: 'bg-gray-100 text-gray-800',
    description: 'Batería de GEL de ciclo profundo con 12V de tensión nominal y 150Ah de capacidad (C20). Ofrece alta resistencia a la corrosión, excelente capacidad de descarga en ciclo profundo y una vida útil de diseño de 10 años.',
    pdfUrl: '/fichas/baterias/telperion-gel-150ah.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '150 Ah', icon: 'battery' },
      { label: 'VOLTAJE', value: '12 V', icon: 'zap' }
    ]
  },
  {
    id: 'telperion-gel-premium-12v-150ah',
    name: 'Batería Premium GEL Telperion 12V 150Ah C10',
    category: 'Baterías',
    brand: 'Telperion',
    image: '/products/baterias/telperion-gel-premium-150ah.png',
    badge: 'PREMIUM - TELPERION',
    badgeClassName: 'bg-slate-800 text-yellow-400',
    description: 'Batería Premium GEL de ciclo profundo con 12V de tensión nominal y 150Ah de capacidad (C10). Cuenta con electrolito coloidal de nanosílice, brindando un rendimiento superior y una vida útil de diseño extendida de hasta 12 años.',
    pdfUrl: '/fichas/baterias/telperion-gel-premium-150ah.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '150 Ah (C10)', icon: 'battery' },
      { label: 'VOLTAJE', value: '12 V', icon: 'zap' }
    ]
  },
  {
    id: 'telperion-gel-12v-100ah',
    name: 'Batería GEL Telperion 12V 100Ah C20',
    category: 'Baterías',
    brand: 'Telperion',
    image: '/products/baterias/telperion-gel-100ah.png',
    badge: 'TELPERION',
    badgeClassName: 'bg-gray-100 text-gray-800',
    description: 'Batería de GEL de ciclo profundo con 12V de tensión nominal y 100Ah de capacidad (C20). Ofrece una excelente capacidad de descarga, alta densidad de energía y una vida útil de diseño de 10 años.',
    pdfUrl: '/fichas/baterias/telperion-gel-100ah.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '100 Ah', icon: 'battery' },
      { label: 'VOLTAJE', value: '12 V', icon: 'zap' }
    ]
  },
  {
    id: 'pylontech-rt12100g31',
    name: 'Batería de Litio Pylontech RT12100G31 12V 100Ah',
    category: 'Baterías',
    brand: 'Pylontech',
    image: '/products/baterias/pylontech-rt12100.png',
    badge: 'PYLONTECH',
    badgeClassName: 'bg-emerald-100 text-emerald-800',
    description: 'Batería de iones de litio (LFP) multipropósito de 12.8V y 100Ah (1280Wh). Incorpora película calefactora para operar hasta a -40°C, protección IP67, conectividad Bluetooth y ofrece más de 4500 ciclos de vida útil.',
    pdfUrl: '/fichas/baterias/pylontech-rt12100.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '100 Ah / 1.28 kWh', icon: 'battery' },
      { label: 'QUÍMICA', value: 'Litio (LFP)', icon: 'smartphone' }
    ]
  },
  {
    id: 'telperion-lifepo4-25v-100ah',
    name: 'Batería de Litio Telperion 25.6V 100Ah',
    category: 'Baterías',
    brand: 'Telperion',
    image: '/products/baterias/telperion-litio-25v-100ah.png',
    badge: 'TELPERION',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Batería de litio (LiFePO4) de ciclo profundo con 25.6V de tensión nominal y 100Ah de capacidad (2560Wh). Es una alternativa segura, ligera y libre de mantenimiento, capaz de entregar hasta 7000 ciclos de vida útil al 30% de profundidad de descarga (DoD).',
    pdfUrl: '/fichas/baterias/telperion-litio-25v-100ah.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '100 Ah / 2.56 kWh', icon: 'battery' },
      { label: 'QUÍMICA', value: 'Litio (LiFePO4)', icon: 'shield-check' }
    ]
  },
  {
    id: 'telperion-lifepo4-25v-50ah',
    name: 'Batería de Litio Telperion 25.6V 50Ah',
    category: 'Baterías',
    brand: 'Telperion',
    image: '/products/baterias/telperion-litio-25v-50ah.png',
    badge: 'TELPERION',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Batería de litio (LiFePO4) de ciclo profundo con 25.6V de tensión nominal y 50Ah de capacidad (1280Wh). Diseñada para ser ligera y segura, ofreciendo un excelente rendimiento con hasta 7000 ciclos de vida útil al 30% de profundidad de descarga (DoD).',
    pdfUrl: '/fichas/baterias/telperion-litio-25v-50ah.pdf',
    specs: [
      { label: 'CAPACIDAD', value: '50 Ah / 1.28 kWh', icon: 'battery' },
      { label: 'QUÍMICA', value: 'Litio (LiFePO4)', icon: 'shield-check' }
    ]
  },
  {
    id: 'victron-bluesolar-pwm-light',
    name: 'Controlador de Carga Victron BlueSolar PWM-Light 12/24V',
    category: 'Controladores de Carga',
    brand: 'Victron Energy',
    image: '/products/controladores-de-carga/victron-bluesolar-pwm.png',
    badge: 'VICTRON',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Controlador de carga PWM con detección automática de tensión (12/24V) y carga de baterías de tres etapas (inicial, absorción y flotación) no programable. Incluye función de desconexión por baja tensión y salidas protegidas contra sobrecarga, cortocircuito y polaridad inversa.',
    pdfUrl: '/fichas/controladores-de-carga/victron-bluesolar-pwm.pdf',
    specs: [
      { label: 'CORRIENTE', value: '5A - 30A', icon: 'zap' },
      { label: 'VOLTAJE', value: '12/24V (Auto)', icon: 'battery' }
    ]
  },
  {
    id: 'victron-bluesolar-mppt-150-35',
    name: 'Controlador de Carga Victron BlueSolar MPPT 150/35',
    category: 'Controladores de Carga',
    brand: 'Victron Energy',
    image: '/products/controladores-de-carga/victron-bluesolar-mppt-150-35.png',
    badge: 'VICTRON',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Controlador de carga con seguimiento ultrarrápido del punto de máxima potencia (MPPT), capaz de mejorar la recogida de energía hasta en un 30% en comparación con controladores PWM. Ofrece una eficiencia máxima superior al 98%, algoritmo de carga flexible y amplia protección electrónica.',
    pdfUrl: '/fichas/controladores-de-carga/victron-bluesolar-mppt.pdf',
    specs: [
      { label: 'CORRIENTE', value: '35 A', icon: 'zap' },
      { label: 'VOLTAJE', value: '12/24/36/48 V', icon: 'battery' }
    ]
  },
  {
    id: 'victron-bluesolar-mppt-100-50',
    name: 'Controlador de Carga Victron BlueSolar MPPT 100/50',
    category: 'Controladores de Carga',
    brand: 'Victron Energy',
    image: '/products/controladores-de-carga/victron-bluesolar-mppt-100-50.png',
    badge: 'VICTRON',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Controlador de carga solar con seguimiento ultrarrápido del punto de máxima potencia (MPPT), capaz de mejorar la recogida de energía hasta en un 30% frente a los PWM. Detecta automáticamente tensiones de 12/24V, ofrece una eficiencia superior al 98% y cuenta con amplia protección electrónica.',
    pdfUrl: '/fichas/controladores-de-carga/victron-bluesolar-mppt-100-50.pdf',
    specs: [
      { label: 'CORRIENTE', value: '50 A', icon: 'zap' },
      { label: 'VOLTAJE', value: '12/24 V', icon: 'battery' }
    ]
  },
  {
    id: 'victron-bluesolar-mppt-75-15',
    name: 'Controlador de Carga Victron BlueSolar MPPT 75/15',
    category: 'Controladores de Carga',
    brand: 'Victron Energy',
    image: '/products/controladores-de-carga/victron-bluesolar-mppt-75-15.png',
    badge: 'VICTRON',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Controlador MPPT ultrarrápido ideal para sistemas pequeños, compatible con paneles de hasta 75V y 15A de carga. Incluye salida de carga a prueba de cortocircuitos y el algoritmo inteligente BatteryLife, que modula la desconexión para evitar la descarga excesiva y proteger la batería.',
    pdfUrl: '/fichas/controladores-de-carga/victron-bluesolar-mppt-75-15.pdf',
    specs: [
      { label: 'CORRIENTE', value: '15 A', icon: 'zap' },
      { label: 'VOLTAJE', value: '12/24 V (Auto)', icon: 'battery' }
    ]
  },
  {
    id: 'victron-bluesolar-mppt-75-10',
    name: 'Controlador de Carga Victron BlueSolar MPPT 75/10',
    category: 'Controladores de Carga',
    brand: 'Victron Energy',
    image: '/products/controladores-de-carga/victron-bluesolar-mppt-75-10.png',
    badge: 'VICTRON',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Controlador MPPT compacto y eficiente para sistemas de 12/24V, capaz de manejar paneles de hasta 75V y corrientes de carga de 10A. Incorpora salida de carga con tecnología BatteryLife para proteger las baterías de descargas excesivas prolongadas.',
    pdfUrl: '/fichas/controladores-de-carga/victron-bluesolar-mppt-75-10.pdf',
    specs: [
      { label: 'CORRIENTE', value: '10 A', icon: 'zap' },
      { label: 'VOLTAJE', value: '12/24 V (Auto)', icon: 'battery' }
    ]
  },
  {
    id: 'samlex-sec-1235',
    name: 'Fuente de Poder Samlex SEC-1235',
    category: 'Conversores',
    brand: 'Samlex',
    image: '/products/conversores/samlex-sec-1235.png',
    badge: 'SAMLEX',
    badgeClassName: 'bg-slate-800 text-white',
    description: 'Fuente de poder de 30 Amps con diseño avanzado de modo de conmutación (switcheo). Permite establecer el voltaje de entrada a 120VCA o 230VCA e incorpora protección contra sobrevoltaje y cortocircuito.',
    pdfUrl: '/fichas/conversores/samlex-sec-1235.pdf',
    specs: [
      { label: 'CORRIENTE', value: '30 Amps', icon: 'zap' },
      { label: 'ENTRADA', value: '120/230 VCA', icon: 'plug' }
    ]
  },
  {
    id: 'samlex-sec-1223',
    name: 'Fuente de Poder Samlex SEC-1223',
    category: 'Conversores',
    brand: 'Samlex',
    image: '/products/conversores/samlex-sec-1223.png',
    badge: 'SAMLEX',
    badgeClassName: 'bg-slate-800 text-white',
    description: 'Fuente de poder de 23 Amps con diseño avanzado de modo de conmutación (switcheo). Proporciona una corriente de energía confiable con un tamaño y peso mínimo, e incorpora protección contra sobrevoltaje y cortocircuito, admitiendo entrada de 120VCA o 240VCA.',
    pdfUrl: '/fichas/conversores/samlex-sec-1223.pdf',
    specs: [
      { label: 'CORRIENTE', value: '23 Amps', icon: 'zap' },
      { label: 'ENTRADA', value: '120/240 VCA', icon: 'plug' }
    ]
  },
  {
    id: 'samlex-sdc-23',
    name: 'Conversor Samlex SDC-23',
    category: 'Conversores',
    brand: 'Samlex',
    image: '/products/conversores/samlex-sdc-23.png',
    badge: 'SAMLEX',
    badgeClassName: 'bg-slate-800 text-white',
    description: 'Conversor DC-DC de 20 Amps con diseño avanzado de modo de conmutación (switcheo). Convierte de 24 VCD a 12 VCD de forma altamente eficiente en un formato compacto y ligero, e incorpora protección contra sobrevoltaje y cortocircuito.',
    pdfUrl: '/fichas/conversores/samlex-sdc-23.pdf',
    specs: [
      { label: 'CORRIENTE', value: '20 Amps', icon: 'zap' },
      { label: 'CONVERSIÓN', value: '24 VCD a 12 VCD', icon: 'arrow-right-left' }
    ]
  },
  {
    id: 'kenwood-nxr-1700',
    name: 'Repetidora VHF Kenwood NXR-1700',
    category: 'Radios',
    brand: 'Kenwood',
    image: '/products/radios/kenwood-nxr-1700.png',
    badge: 'KENWOOD',
    badgeClassName: 'bg-red-100 text-red-800',
    description: 'Repetidora VHF que opera en modo análogo y DMR de fábrica. Ofrece 50W de potencia, cuenta con puerto LAN para comunicación IP extendida y tiene una capacidad de hasta 32 canales.',
    pdfUrl: '/fichas/radios/kenwood-nxr-1700.pdf',
    specs: [
      { label: 'POTENCIA', value: '50 W', icon: 'zap' },
      { label: 'CANALES', value: '32', icon: 'radio' }
    ]
  },
  {
    id: 'kenwood-tk-2000-3000',
    name: 'Radio Portátil Kenwood TK-2000 / 3000',
    category: 'Radios',
    brand: 'Kenwood',
    image: '/products/radios/kenwood-tk-2000.png',
    badge: 'KENWOOD',
    badgeClassName: 'bg-red-100 text-red-800',
    description: 'Radio portátil de alta eficiencia, delgado y muy ligero (sólo 222 gr con batería). Ofrece 16 canales con función de exploración (scan) y un diseño robusto que cumple con la protección IP54 contra polvo/agua y estándares militares MIL-STD-810.',
    pdfUrl: '/fichas/radios/kenwood-tk-2000.pdf',
    specs: [
      { label: 'CANALES', value: '16', icon: 'radio' },
      { label: 'POTENCIA', value: '5W VHF / 4W UHF', icon: 'zap' }
    ]
  },
  {
    id: 'kenwood-nx-1200-1300',
    name: 'Radio Portátil Kenwood NX-1200 / 1300',
    category: 'Radios',
    brand: 'Kenwood',
    image: '/products/radios/kenwood-nx-1200.png',
    badge: 'KENWOOD',
    badgeClassName: 'bg-red-100 text-red-800',
    description: 'Radio digital multiprotocolo diseñado para operar bajo protocolos digitales NXDN o DMR y FM analógico. Ofrece una potencia de salida de 5W en VHF/UHF y cuenta con un diseño robusto que cumple con los estándares IP54, IP55 y MIL-STD-810.',
    pdfUrl: '/fichas/radios/kenwood-nx-1200.pdf',
    specs: [
      { label: 'POTENCIA', value: '5 W', icon: 'zap' },
      { label: 'PROTOCOLO', value: 'NXDN / DMR / FM', icon: 'radio' }
    ]
  },
  {
    id: 'icom-f4003-uhf',
    name: 'Radio Portátil Icom IC-F4003 (UHF)',
    category: 'Radios',
    brand: 'Icom',
    image: '/products/radios/icom-f4003-uhf.png',
    badge: 'ICOM',
    badgeClassName: 'bg-stone-200 text-stone-800',
    description: 'Radio portátil UHF de 5W y 16 canales, diseñado para una operación simple y comunicación instantánea. Ofrece un audio de alta capacidad (1500 mW) ideal para entornos ruidosos, y cuenta con una estructura resistente al polvo y agua (IP54) bajo estándares militares MIL-STD-810.',
    pdfUrl: '/fichas/radios/icom-f4003.pdf',
    specs: [
      { label: 'BANDA', value: 'UHF (400-470 MHz)', icon: 'radio' },
      { label: 'PROTECCIÓN', value: 'IP54 / MIL-STD-810', icon: 'shield-check' }
    ]
  },
  {
    id: 'icom-f2100ds-uhf',
    name: 'Radio Portátil Icom IC-F2100DS (UHF)',
    category: 'Radios',
    brand: 'Icom',
    image: '/products/radios/icom-f2100ds.png',
    badge: 'ICOM',
    badgeClassName: 'bg-stone-200 text-stone-800',
    description: 'Radio portátil digital UHF que incluye teclado simple y una pantalla alfanumérica de 8 caracteres. Destaca por su potente audio de 1500 mW, operación en modos analógico y digital (NXDN/dPMR), y un diseño ultrarresistente al agua y polvo con certificaciones IP67/55/54 y MIL-STD-810-G.',
    pdfUrl: '/fichas/radios/icom-f2100ds.pdf',
    specs: [
      { label: 'CANALES', value: '128 Canales / 8 Zonas', icon: 'radio' },
      { label: 'PROTECCIÓN', value: 'IP67 / MIL-STD-810-G', icon: 'shield-check' }
    ]
  },
  {
    id: 'pelco-sarix-value-torreta',
    name: 'Cámara Torreta Varifocal Pelco Serie Sarix Value',
    category: 'Cámaras',
    brand: 'Pelco',
    image: '/products/camaras/pelco-sarix-value-torreta.png',
    badge: 'PELCO',
    badgeClassName: 'bg-slate-200 text-slate-800',
    description: 'Cámara tipo torreta varifocal industrial que ofrece un excelente rendimiento en condiciones de poca luz. Captura video a 20 fotogramas por segundo (fps) con resolución de 5 MP, incorpora iluminación por infrarrojos de hasta 30 metros y cuenta con clasificación IP66 para resistir al agua.',
    pdfUrl: '/fichas/camaras/pelco-sarix-value-torreta.pdf',
    specs: [
      { label: 'RESOLUCIÓN', value: '5 MP a 20 fps', icon: 'video' },
      { label: 'PROTECCIÓN', value: 'IP66 / IR 30m', icon: 'shield-check' }
    ]
  },
  {
    id: 'pelco-esprit-compacta-ptz',
    name: 'Cámara PTZ Pelco Esprit Compacta',
    category: 'Cámaras',
    brand: 'Pelco',
    image: '/products/camaras/pelco-esprit-compacta.png',
    badge: 'PELCO',
    badgeClassName: 'bg-slate-200 text-slate-800',
    description: 'Cámara PTZ industrial con múltiples opciones de alta resolución y opciones de iluminación IR o luz blanca. Su diseño es altamente resistente al vandalismo y a los impactos, operando de manera óptima en temperaturas extremas con una calificación de -40° a 65°C.',
    pdfUrl: '/fichas/camaras/pelco-esprit-compacta.pdf',
    specs: [
      { label: 'RESISTENCIA', value: 'Impactos / Antivandalismo', icon: 'shield-alert' },
      { label: 'TEMPERATURA', value: '-40° a 65°C', icon: 'thermometer' }
    ]
  },
  {
    id: 'pelco-sarix-value-minidomo',
    name: 'Mini Cámara Domo Varifocal Pelco Serie Sarix Value',
    category: 'Cámaras',
    brand: 'Pelco',
    image: '/products/camaras/pelco-sarix-value-minidomo.png',
    badge: 'PELCO',
    badgeClassName: 'bg-slate-200 text-slate-800',
    description: 'Mini cámara domo varifocal que ofrece cobertura día y noche gracias a su iluminación IR integrada. Cuenta con análisis básicos de video, es resistente a la lluvia y permite una integración perfecta con sistemas VMS que cumplen con el estándar ONVIF.',
    pdfUrl: '/fichas/camaras/pelco-sarix-value-minidomo.pdf',
    specs: [
      { label: 'VISIÓN', value: 'Día/Noche con IR', icon: 'moon' },
      { label: 'SISTEMA', value: 'Análisis / ONVIF', icon: 'cctv' }
    ]
  },
  {
    id: 'pelco-exsite-enhanced-2',
    name: 'Cámara PTZ Pelco Serie ExSite Enhanced 2 IR',
    category: 'Cámaras',
    brand: 'Pelco',
    image: '/products/camaras/pelco-exsite-enhanced-2.png',
    badge: 'PELCO',
    badgeClassName: 'bg-slate-200 text-slate-800',
    description: 'Cámara PTZ especializada y altamente resistente, diseñada a prueba de explosiones y encendido por polvo para entornos críticos. Destaca por integrar iluminación IR varifocal de largo alcance y estabilización electrónica de la imagen para asegurar capturas nítidas.',
    pdfUrl: '/fichas/camaras/pelco-exsite-enhanced-2.pdf',
    specs: [
      { label: 'PROTECCIÓN', value: 'A prueba de explosiones', icon: 'flame' },
      { label: 'VISIÓN', value: 'IR Largo Alcance', icon: 'eye' }
    ]
  },
  {
    id: 'pelco-spectra-enhanced-7',
    name: 'Cámara PTZ Pelco Serie Spectra Enhanced IR Look Up 7',
    category: 'Cámaras',
    brand: 'Pelco',
    image: '/products/camaras/pelco-spectra-enhanced-7.png',
    badge: 'PELCO',
    badgeClassName: 'bg-slate-200 text-slate-800',
    description: 'Cámara PTZ avanzada que permite visualizar incidentes con claridad a una distancia de hasta 40x. Destaca por su iluminación IR incorporada de hasta 200 metros, tecnología de clasificación e identificación de personas y vehículos, y su integración con VMS que cumple con ONVIF.',
    pdfUrl: '/fichas/camaras/pelco-spectra-enhanced-7.pdf',
    specs: [
      { label: 'VISIÓN', value: 'Zoom 40x / IR 200m', icon: 'zoom-in' },
      { label: 'IA / SISTEMA', value: 'Clasificación / ONVIF', icon: 'brain' }
    ]
  },
  {
    id: 'pelco-sarix-value-bullet',
    name: 'Cámara Bullet & Box Pelco Serie Sarix Value',
    category: 'Cámaras',
    brand: 'Pelco',
    image: '/products/camaras/pelco-sarix-value-bullet.png',
    badge: 'PELCO',
    badgeClassName: 'bg-slate-200 text-slate-800',
    description: 'Cámara de seguridad formato Bullet & Box que cuenta con clasificación IP66, haciéndola altamente resistente al agua para instalaciones exigentes. Incorpora analítica de video básicas y garantiza una perfecta integración con sistemas VMS que cumplen con el protocolo ONVIF.',
    pdfUrl: '/fichas/camaras/pelco-sarix-value-bullet.pdf',
    specs: [
      { label: 'PROTECCIÓN', value: 'IP66 (Agua)', icon: 'droplet' },
      { label: 'SISTEMA', value: 'Analítica / ONVIF', icon: 'cctv' }
    ]
  },
  {
    id: 'motorola-vb400',
    name: 'Cámara Corporal Motorola VB400',
    category: 'Cámaras',
    brand: 'Motorola Solutions',
    image: '/products/camaras/motorola-vb400.png',
    badge: 'MOTOROLA',
    badgeClassName: 'bg-blue-100 text-blue-800',
    description: 'Cámara corporal resistente y segura, diseñada para capturar evidencia en alta definición (1080p) con un lente gran angular de 120°. Ofrece hasta 12 horas de grabación continua, encriptación AES 256 y un diseño extremadamente robusto con certificaciones IP67 y MIL-STD 810G para soportar entornos exigentes.',
    pdfUrl: '/fichas/camaras/motorola-vb400.pdf',
    specs: [
      { label: 'BATERÍA', value: 'Hasta 12 horas', icon: 'battery' },
      { label: 'PROTECCIÓN', value: 'IP67 / MIL-STD 810G', icon: 'shield-check' }
    ]
  },
  {
    id: 'avigilon-h5a-corner',
    name: 'Cámara Especializada Avigilon H5A Corner',
    category: 'Cámaras',
    brand: 'Avigilon',
    image: '/products/camaras/avigilon-h5a-corner.png',
    badge: 'AVIGILON',
    badgeClassName: 'bg-zinc-200 text-zinc-800',
    description: 'Cámara industrial especializada diseñada para ser altamente resistente al agua, a los impactos y al vandalismo. Destaca por su capacidad para detectar y clasificar objetos con gran precisión (incluso en escenas densas), captura de detalles en áreas con alto contraste de luz, e incorpora un micrófono integrado que puede desactivarse.',
    pdfUrl: '/fichas/camaras/avigilon-h5a-corner.pdf',
    specs: [
      { label: 'RESISTENCIA', value: 'Agua / Antivandalismo', icon: 'shield-alert' },
      { label: 'SISTEMA', value: 'Clasificación IA / Micrófono', icon: 'mic' }
    ]
  },
  {
    id: 'avigilon-h5a-multisensor',
    name: 'Cámara Multisensor Avigilon H5A',
    category: 'Cámaras',
    brand: 'Avigilon',
    image: '/products/camaras/avigilon-h5a-multisensor.png',
    badge: 'AVIGILON',
    badgeClassName: 'bg-zinc-200 text-zinc-800',
    description: 'Cámara multisensor que ofrece cobertura panorámica de 180°, 270° o 360° utilizando 3 o 4 sensores direccionables desde un solo punto. Incorpora analítica avanzada con IA H5A para la clasificación de personas y vehículos, ofrece hasta 32 MP totales con amplio rango dinámico (WDR ~120 dB) y es compatible con plataformas Avigilon Unity y Alta.',
    pdfUrl: '/fichas/camaras/avigilon-h5a-multisensor.pdf',
    specs: [
      { label: 'COBERTURA', value: '180° / 270° / 360°', icon: 'maximize' },
      { label: 'RESOLUCIÓN', value: 'Hasta 32 MP', icon: 'camera' }
    ]
  },
  {
    id: 'avigilon-h6xp-domo',
    name: 'Cámara Domo Avigilon H6XP',
    category: 'Cámaras',
    brand: 'Avigilon',
    image: '/products/camaras/avigilon-h6xp-domo.png',
    badge: 'AVIGILON',
    badgeClassName: 'bg-zinc-200 text-zinc-800',
    description: 'Cámara domo de seguridad que ofrece análisis avanzado de audio y video. Es compatible con la tecnología Z-Wave, permite la integración de iluminación IR de forma opcional y cumple con los perfiles ONVIF S, T, G y M para garantizar una máxima interoperabilidad.',
    pdfUrl: '/fichas/camaras/avigilon-h6xp-domo.pdf',
    specs: [
      { label: 'ANÁLISIS', value: 'Audio y Video', icon: 'mic' },
      { label: 'SISTEMA', value: 'Z-Wave / ONVIF', icon: 'network' }
    ]
  },
  {
    id: 'avigilon-h6x-bullet',
    name: 'Cámara Bullet Avigilon H6X',
    category: 'Cámaras',
    brand: 'Avigilon',
    image: '/products/camaras/avigilon-h6x-bullet.png',
    badge: 'AVIGILON',
    badgeClassName: 'bg-zinc-200 text-zinc-800',
    description: 'Cámara tipo Bullet ideal para el monitoreo de sitios grandes con detalles nítidos. Destaca por su capacidad de lectura de matrículas a largas distancias y funciones de privacidad para desenfocar personas y vehículos, además de contar con clasificación IP66 de resistencia al polvo y agua.',
    pdfUrl: '/fichas/camaras/avigilon-h6x-bullet.pdf',
    specs: [
      { label: 'ANÁLISIS', value: 'LPR / Privacidad', icon: 'car' },
      { label: 'PROTECCIÓN', value: 'IP66 (Agua y Polvo)', icon: 'shield-check' }
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
    id: 'txpro-tx-600',
    name: 'Radio Portátil tx PRO TX-600',
    category: 'Radios',
    brand: 'TXPRO Professional',
    image: '/products/radios/txpro-tx-600.png',
    badge: 'TX PRO',
    badgeClassName: 'bg-red-100 text-red-800',
    description: 'Radio portátil profesional que opera en el rango UHF de 450-470 MHz y cuenta con 16 canales y 5 Watts de potencia de salida real. Destaca por su batería de alta capacidad de 2500 mAh, soporta función VOX y candado de canal ocupado, e incluye un kit completo con cargador, batería, clip, sostenedor y antena.',
    pdfUrl: '/fichas/radios/txpro-tx-600.pdf',
    specs: [
      { label: 'POTENCIA', value: '5 Watts', icon: 'zap' },
      { label: 'BATERÍA', value: '2500 mAh', icon: 'battery' }
    ]
  },
  {
    id: 'txpro-tx-320',
    name: 'Radio Portátil tx PRO TX-320',
    category: 'Radios',
    brand: 'TXPRO Professional',
    image: '/products/radios/txpro-tx-320.png',
    badge: 'TX PRO',
    badgeClassName: 'bg-red-100 text-red-800',
    description: 'Radio portátil que opera en el rango de frecuencias de 450-470 MHz, contando con 16 canales y 2 Watts de potencia de salida real. Destaca por incluir funciones prácticas como VOX, escaneo de canales (Scan) y protección de configuración mediante password de lectura y escritura. Se entrega con un kit que incluye cargador, batería de 1200 mAh, clip y antena.',
    pdfUrl: '/fichas/radios/txpro-tx-320.pdf',
    specs: [
      { label: 'POTENCIA', value: '2 Watts', icon: 'zap' },
      { label: 'FUNCIONES', value: 'VOX / Scan', icon: 'settings' }
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
const CATEGORY_OPTIONS = [
  'Radios', 
  'Paneles Solares', 
  'Inversores Off Grid', 
  'Inversores de Red', 
  'Antenas', 
  'Conversores', 
  'Controladores de Carga', 
  'Cámaras', 
  'Baterías'
];
const BRAND_OPTIONS = ['Motorola Solutions', 'TXPRO Professional', 'Trina Solar', 'Jinko Solar', 'NVS', 'Victron Energy', 'LMG', 'Hustler', 'Fronius', 'Huawei', 'Telperion', 'Pylontech', 'Samlex', 'Kenwood', 'Icom', 'Pelco', 'Avigilon', 'Otras Marcas'];

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
