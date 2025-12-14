import { Product, Service, Stat, NavLink } from './types';

// Import images
import feature1 from './src/images/feature1.jpeg';
import feature2 from './src/images/feature2.jpeg';
import feature3 from './src/images/feature3.jpeg';
import c1 from './src/images/c1.jpeg';
import c2 from './src/images/c2.jpeg';
import c3 from './src/images/c3.jpeg';
import c4 from './src/images/c4.jpeg';
import c5 from './src/images/c5.jpeg';
import c6 from './src/images/c6.jpeg';
import d1 from './src/images/d1.jpeg';
import d2 from './src/images/d2.jpeg';
import d3 from './src/images/d3.jpeg';
import d4 from './src/images/d4.jpeg';
import d5 from './src/images/d5.jpeg';
import d6 from './src/images/d6.jpeg';

export const NAV_LINKS: NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Membership', href: '#membership' },
  { label: 'Events', href: '#events' },
  { label: 'All Pages', href: '#pages' },
];

export const STATS: Stat[] = [
  { label: '4.9', value: '4.9', description: 'Designed and fabricated with passion.' },
  { label: '10k', value: '10k', description: 'Built a reputation for precision and power.' },
  { label: 'NO.1', value: 'NO.1', description: 'Each one unique, bold, and road-ready.' },
  { label: '8+', value: '8+', description: 'Delivering neon performance worldwide.' },
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Organize Cycling',
    description: 'Get your ride delivered to your doorstep with no extra cost.',
    image: feature1
  },
  {
    id: '02',
    title: 'ON-Demand Repair',
    description: 'Access local partner mechanics for quick servicing.',
    image: feature2
  },
  {
    id: '03',
    title: 'Lifetime Warranty',
    description: 'Confidence that lasts, we back our frames for life.',
    image: feature3
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'VeloStrive X1',
    category: 'Town Bike',
    price: 1500,
    image: c1
  },
  {
    id: 2,
    name: 'AeroBlaze Pro',
    category: 'Racing Bike',
    price: 1700,
    image: c2
  },
  {
    id: 3,
    name: 'UrbanEdge 500',
    category: 'City Bike',
    price: 2200,
    image: c3
  },
  {
    id: 4,
    name: 'NeonPulse R8',
    category: 'Luxury Bike',
    price: 1800,
    image: c4
  },
  {
    id: 5,
    name: 'FeltHawk A3',
    category: 'Town Bike',
    price: 1200,
    image: c5
  },
  {
    id: 6,
    name: 'TurboRush GT',
    category: 'Racing Bike',
    price: 2000,
    image: c6
  },
];

export const GALLERY_IMAGES = [
  d1,
  d2,
  d3,
  d4,
  d5,
  d6
];
