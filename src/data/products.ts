export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'men' | 'women' | 'kids';
  type: string;
  color: string;
  sizes: number[];
  images: string[];
  description: string;
  features: string[];
  materials: string[];
  care: string[];
  new?: boolean;
  sale?: boolean;
  salePrice?: number;
}

export const products: Product[] = [
  // Men's Collection
  {
    id: 'm1',
    name: 'Classic Oxford Dress Shoe',
    price: 299.99,
    category: 'men',
    type: 'dress',
    color: 'black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614252370653-c13b2f8fa797?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614252371303-cbe4e45b283d?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Timeless oxford design crafted from premium leather with a sleek silhouette. Perfect for formal occasions and business wear.',
    features: [
      'Genuine leather upper',
      'Leather sole with rubber heel',
      'Cushioned insole for all-day comfort',
      'Blake stitched construction',
      'Breathable leather lining'
    ],
    materials: [
      'Upper: 100% Calfskin leather',
      'Sole: Leather with rubber heel insert',
      'Lining: Full leather',
      'Laces: Waxed cotton'
    ],
    care: [
      'Clean with a soft, dry cloth',
      'Apply leather conditioner regularly',
      'Use shoe trees when not wearing',
      'Avoid wearing in wet conditions'
    ]
  },
  {
    id: 'm2',
    name: 'Premium Leather Loafer',
    price: 259.99,
    category: 'men',
    type: 'loafer',
    color: 'brown',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=2069&auto=format&fit=crop'
    ],
    description: 'Sophisticated penny loafer featuring hand-burnished leather and classic penny slot detail. Perfect for both casual and business settings.',
    features: [
      'Hand-burnished leather',
      'Leather lining',
      'Memory foam footbed',
      'Flexible rubber sole',
      'Classic penny slot detail'
    ],
    materials: [
      'Upper: Hand-burnished calfskin',
      'Sole: Premium rubber',
      'Lining: Full leather',
      'Footbed: Memory foam with leather covering'
    ],
    care: [
      'Clean with a soft, damp cloth',
      'Use leather conditioner monthly',
      'Store with shoe trees',
      'Rotate with other shoes'
    ]
  },
  {
    id: 'm3',
    name: 'Performance Running Shoe',
    price: 179.99,
    category: 'men',
    type: 'athletic',
    color: 'blue',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'High-performance running shoe with responsive cushioning and breathable mesh. Engineered for serious runners.',
    features: [
      'Breathable mesh upper',
      'Responsive cushioning',
      'Durable rubber outsole',
      'Reflective details',
      '10mm heel-to-toe drop'
    ],
    materials: [
      'Upper: Engineered mesh',
      'Midsole: EVA foam',
      'Outsole: High-abrasion rubber',
      'Insole: Removable OrthoLite'
    ],
    care: [
      'Machine washable, gentle cycle',
      'Air dry away from direct heat',
      'Remove insoles to clean separately',
      'Rotate with other running shoes'
    ],
    new: true
  },

  // Women's Collection
  {
    id: 'w1',
    name: 'Elegant Stiletto Heel',
    price: 229.99,
    category: 'women',
    type: 'heels',
    color: 'red',
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Sophisticated stiletto heel featuring premium suede and a comfortable padded insole. Perfect for special occasions.',
    features: [
      'Premium suede upper',
      'Leather lining',
      'Padded insole',
      '4-inch heel height',
      'Non-slip sole'
    ],
    materials: [
      'Upper: Italian suede',
      'Lining: Soft leather',
      'Sole: Leather with non-slip pad',
      'Insole: Cushioned leather'
    ],
    care: [
      'Brush suede regularly',
      'Use suede protector spray',
      'Store in dust bag',
      'Use heel caps for protection'
    ]
  },
  {
    id: 'w2',
    name: 'Classic Ballet Flat',
    price: 149.99,
    category: 'women',
    type: 'flats',
    color: 'nude',
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Timeless ballet flat crafted from soft leather with elegant bow detail. Perfect for everyday sophistication.',
    features: [
      'Soft leather upper',
      'Cushioned footbed',
      'Flexible sole',
      'Bow detail',
      'Memory foam padding'
    ],
    materials: [
      'Upper: Nappa leather',
      'Lining: Leather',
      'Sole: Flexible rubber',
      'Footbed: Memory foam'
    ],
    care: [
      'Wipe clean with soft cloth',
      'Use leather conditioner',
      'Store with shoe trees',
      'Protect from water'
    ],
    sale: true,
    salePrice: 119.99
  },
  {
    id: 'w3',
    name: 'Athleisure Sneaker',
    price: 159.99,
    category: 'women',
    type: 'sneakers',
    color: 'white',
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Modern sneaker combining style and comfort with premium materials. Perfect for active lifestyles.',
    features: [
      'Leather and mesh upper',
      'Memory foam insole',
      'Lightweight design',
      'Rubber outsole',
      'Removable footbed'
    ],
    materials: [
      'Upper: Premium leather and mesh',
      'Midsole: Lightweight EVA',
      'Outsole: Durable rubber',
      'Insole: Memory foam'
    ],
    care: [
      'Wipe clean with damp cloth',
      'Air dry naturally',
      'Use shoe deodorizer',
      'Replace insoles as needed'
    ],
    new: true
  },

  // Kids' Collection
  {
    id: 'k1',
    name: 'Playful Light-Up Sneaker',
    price: 69.99,
    category: 'kids',
    type: 'sneakers',
    color: 'multi',
    sizes: [10, 11, 12, 13, 1, 2, 3],
    images: [
      'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Fun light-up sneakers with durable construction and easy-to-use straps. Perfect for active kids.',
    features: [
      'Light-up sole',
      'Velcro straps',
      'Cushioned insole',
      'Non-marking sole',
      'Reinforced toe'
    ],
    materials: [
      'Upper: Synthetic leather and mesh',
      'Sole: LED-embedded rubber',
      'Lining: Breathable mesh',
      'Closure: Hook and loop'
    ],
    care: [
      'Wipe clean with damp cloth',
      'Remove battery before washing',
      'Air dry only',
      'Replace batteries as needed'
    ]
  },
  {
    id: 'k2',
    name: 'Comfortable School Shoe',
    price: 79.99,
    category: 'kids',
    type: 'school',
    color: 'black',
    sizes: [10, 11, 12, 13, 1, 2, 3],
    images: [
      'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Durable and comfortable school shoes with scuff-resistant toe. Built to last the whole school year.',
    features: [
      'Scuff-resistant toe',
      'Breathable lining',
      'Shock-absorbing sole',
      'Easy-clean surface',
      'Adjustable strap'
    ],
    materials: [
      'Upper: Polished leather',
      'Sole: Durable rubber',
      'Lining: Breathable textile',
      'Insole: Cushioned EVA'
    ],
    care: [
      'Polish regularly',
      'Clean with damp cloth',
      'Use shoe protector spray',
      'Check fit regularly'
    ]
  },
  {
    id: 'k3',
    name: 'Sport Sandal',
    price: 49.99,
    category: 'kids',
    type: 'sandals',
    color: 'navy',
    sizes: [10, 11, 12, 13, 1, 2, 3],
    images: [
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Durable sport sandal perfect for active kids and summer adventures. Water-friendly and quick-drying.',
    features: [
      'Quick-dry material',
      'Adjustable straps',
      'Non-slip sole',
      'Water-resistant',
      'Toe protection'
    ],
    materials: [
      'Upper: Water-resistant synthetic',
      'Sole: Grippy rubber',
      'Straps: Adjustable velcro',
      'Footbed: EVA foam'
    ],
    care: [
      'Rinse after beach/pool use',
      'Air dry in shade',
      'Clean with mild soap',
      'Check strap condition'
    ],
    sale: true,
    salePrice: 39.99
  }
];