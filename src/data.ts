/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, MenuCategory, Review, Sponsor, BookingSlot } from './types';

// Asset paths based on generated images
export const IMAGES = {
  heroLogo: '/src/assets/images/kaizen_hero_logo_1783601017759.jpg',
  turf: '/src/assets/images/kaizen_turf_1783601042482.jpg',
  pickleball: '/src/assets/images/kaizen_pickleball_1783601063249.jpg',
  cafe: '/src/assets/images/kaizen_cafe_1783601085605.jpg',
  polo: '/src/assets/images/kaizen_polo_1783601110663.jpg',
  cover: '/src/assets/images/kaizen_cover_1783601132238.jpg',
};

export const SPONSORS: Sponsor[] = [
  {
    name: 'Roast & Co.',
    logoText: 'ROAST & CO.',
    description: 'Supplying our in-house premium wood-fire roasted coffee blends.'
  },
  {
    name: 'Smyth & Sons',
    logoText: 'SMYTH & SONS',
    description: 'Purveyors of fine leather equipment and court gear.'
  },
  {
    name: 'Acre Sports',
    logoText: 'ACRE SPORTS',
    description: 'Curators of premium organic cotton athletic apparel.'
  },
  {
    name: 'Standard Turf Co.',
    logoText: 'STANDARD TURF',
    description: 'Ensuring our multi-purpose green is maintained to world-class standards.'
  },
  {
    name: 'Brass & Oak',
    logoText: 'BRASS & OAK',
    description: 'Architects of our bespoke clubhouse interiors and custom furnishings.'
  },
  {
    name: 'The Daily Brew',
    logoText: 'DAILY BREW',
    description: 'Sourcing rare organic tea leaves for our afternoon clubhouse infusions.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'polo-shirt',
    name: 'Kaizeñ Club Polo',
    price: 2499,
    image: IMAGES.polo,
    category: 'Apparel',
    description: 'Crafted from premium 100% organic heavy-weight cotton, featuring a classic ribbed collar and a subtle, tone-on-tone embroidered club crest. Tailored for both movement on the court and refinement in the cafe.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'paddle-cover',
    name: 'Leather-Strap Paddle Cover',
    price: 1899,
    image: IMAGES.cover,
    category: 'Equipment',
    description: 'Hand-stitched vegetable-tanned leather cover, padded with soft wool lining to protect your pickleball paddle. Finished with solid brass hardware and an adjustable shoulder strap.',
  },
  {
    id: 'brass-thermos',
    name: 'Aged Brass Thermos',
    price: 1499,
    image: 'https://picsum.photos/seed/brass_thermos/500/500',
    category: 'Accessories',
    description: 'Double-walled vacuum insulated bottle in a brushed antique brass finish. Keeps beverages perfectly chilled for 24 hours or hot for 12. Complete with an engraved wooden cap.',
  },
  {
    id: 'canvas-bag',
    name: 'Vintage Canvas Sports Bag',
    price: 3299,
    image: 'https://picsum.photos/seed/canvas_bag/500/500',
    category: 'Accessories',
    description: 'A heavy 18oz water-resistant duck canvas duffel with deep leather straps, a dedicated shoe compartment, and aged brass zipper closures. Sized perfectly for the clubhouse locker.',
    sizes: ['One Size']
  },
  {
    id: 'premium-paddle',
    name: 'Heritage Pickleball Paddle',
    price: 4499,
    image: 'https://picsum.photos/seed/paddle_heritage/500/500',
    category: 'Equipment',
    description: 'Built with a premium raw carbon fiber face and a honeycomb polymer core for exceptional spin and control. Wrapped in a perforated leather grip with golden end-caps.',
  },
  {
    id: 'ribbed-socks',
    name: 'Classic Ribbed Socks (Set of 3)',
    price: 899,
    image: 'https://picsum.photos/seed/heritage_socks/500/500',
    category: 'Apparel',
    description: 'Thick, breathable athletic crew socks knitted from long-staple combed cotton. Featuring elastic arch support and understated green varsity stripes on the calf.',
    sizes: ['M', 'L']
  },
  {
    id: 'leather-grip',
    name: 'Premium Leather Grip Tape',
    price: 699,
    image: 'https://picsum.photos/seed/leather_grip/500/500',
    category: 'Equipment',
    description: 'Genuine full-grain leather replacement grip tape for rackets and paddles. Self-adhesive backing, textured for maximum sweat absorption and vintage touch.',
  },
  {
    id: 'club-cap',
    name: 'Signature Club Cap',
    price: 1199,
    image: 'https://picsum.photos/seed/club_cap/500/500',
    category: 'Apparel',
    description: 'Unstructured six-panel cap in durable cotton twill. Features an adjustable leather strap with brass buckle, an embroidered cursive wordmark, and a breathable curved visor.',
    sizes: ['One Size']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Vikram Seth',
    role: 'Member since 2024',
    quote: 'The attention to detail at Kaizeñ is unparalleled. Starting the morning with an intense pickleball match and transitioning straight into a pour-over coffee in the library cafe has become my daily ritual.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: '2',
    name: 'Aishwarya Roy',
    role: 'Founding Member',
    quote: 'It is a rare thing to find a club that values unhurried leisure as much as sporting excellence. The courts are pristine, but the community we have built over meals in the cafe is what makes it feel like home.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: '3',
    name: 'Devansh Mehta',
    role: 'Club League Captain',
    quote: 'The multi-purpose turf is easily the finest in the city. The grass feel, the light distribution, and the quiet environment. Followed by the club\'s signature roast coffee—there is truly nothing like it.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: '4',
    name: 'Neha Kapoor',
    role: 'Weekend Guest',
    quote: 'There is a calm elegance to everything here. From the court lighting to the service in the cafe, each detail feels quietly luxurious.',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: '5',
    name: 'Rohan D’Souza',
    role: 'Regular Player',
    quote: 'The club feels like a private retreat in the middle of the city. The atmosphere is refined, but never stiff, which is rare.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  },
  {
    id: '6',
    name: 'Meera Iyer',
    role: 'Social Member',
    quote: 'I come for the courts, stay for the conversations, and leave feeling like I have stepped into a better version of the day.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5
  }
];

export const CAFE_MENU: MenuCategory[] = [
  {
    title: 'Coffee & Beverages',
    items: [
      {
        name: 'The Kaizeñ Pour-Over',
        description: 'Single-origin Ethiopian beans slow-drip brewed, highlighting notes of sweet bergamot and red tea.',
        price: 280
      },
      {
        name: 'Espresso Romano',
        description: 'Double shot of our house signature dark roast, served over a fresh wedge of lemon.',
        price: 220
      },
      {
        name: 'Brass-Plated Flat White',
        description: 'Silky, textured microfoam over our bold, heavy-bodied double-espresso blend.',
        price: 260
      },
      {
        name: 'Herbal Infusion: Mint & Chamomile',
        description: 'Steeped loose-leaf organic chamomile flower heads finished with a dash of wild local honey.',
        price: 240
      },
      {
        name: 'Iced Leather-Oak Cold Brew',
        description: '24-hour slow-steeped cold brew, aerated and served with a single large sphere ice cube.',
        price: 290
      }
    ]
  },
  {
    title: 'Breakfast & Morning Plates',
    items: [
      {
        name: 'House Sourdough & Cultured Butter',
        description: 'Thick cut toasted artisanal country sourdough served with handmade salted rosemary-infused butter.',
        price: 320
      },
      {
        name: 'Wild Mushroom Tartine',
        description: 'Sautéed forest porcini and chanterelle mushrooms in a rich thyme-garlic white wine emulsion on sourdough.',
        price: 490
      },
      {
        name: 'The Heritage Club Scramble',
        description: 'Three soft folded pasture-raised eggs, organic chives, cream cheese, on slow-toasted seed toast.',
        price: 450
      }
    ]
  },
  {
    title: 'All-Day Fare',
    items: [
      {
        name: 'The Forest Green Salad',
        description: 'Shaved raw zucchini, watercress, toasted pine nuts, local goat cheese, dressed in fine olive oil and fresh lemon.',
        price: 480
      },
      {
        name: 'Warm Roast Beef & Horseradish Baguette',
        description: 'Slow-roasted prime tenderloin, sharp English white cheddar, watercress, and fiery horseradish cream.',
        price: 650
      },
      {
        name: 'Truffle-Infused Barley Bowl',
        description: 'Toasted pearled barley, roasted heirloom root vegetables, wilted kale, drizzled with premium black truffle oil.',
        price: 520
      }
    ]
  },
  {
    title: 'Something Sweet',
    items: [
      {
        name: 'Burnt Honey & Sea Salt Tart',
        description: 'Bespoke dark chocolate pastry shell, baked local honey custard, finished with Maldon salt crystals.',
        price: 380
      },
      {
        name: 'Almond Frangipane Galette',
        description: 'Crisp rustic puff pastry envelope holding toasted almond sweet paste and fresh seasonal figs.',
        price: 420
      }
    ]
  }
];

export const TURF_SLOTS: BookingSlot[] = [
  { time: '06:00 AM - 07:00 AM', available: true },
  { time: '07:00 AM - 08:00 AM', available: true },
  { time: '08:00 AM - 09:00 AM', available: false },
  { time: '09:00 AM - 10:00 AM', available: true },
  { time: '10:00 AM - 11:00 AM', available: false },
  { time: '04:00 PM - 05:00 PM', available: true },
  { time: '05:00 PM - 06:00 PM', available: true },
  { time: '06:00 PM - 07:00 PM', available: false },
  { time: '07:00 PM - 08:00 PM', available: true },
  { time: '08:00 PM - 09:00 PM', available: true },
  { time: '09:00 PM - 10:00 PM', available: true }
];

export const PICKLEBALL_SLOTS: BookingSlot[] = [
  { time: '06:00 AM - 07:00 AM', available: true, courtsAvailable: 3 },
  { time: '07:00 AM - 08:00 AM', available: true, courtsAvailable: 2 },
  { time: '08:00 AM - 09:00 AM', available: true, courtsAvailable: 1 },
  { time: '09:00 AM - 10:00 AM', available: false, courtsAvailable: 0 },
  { time: '10:00 AM - 11:00 AM', available: true, courtsAvailable: 2 },
  { time: '04:00 PM - 05:00 PM', available: true, courtsAvailable: 3 },
  { time: '05:00 PM - 06:00 PM', available: true, courtsAvailable: 1 },
  { time: '06:00 PM - 07:00 PM', available: true, courtsAvailable: 2 },
  { time: '07:00 PM - 08:00 PM', available: false, courtsAvailable: 0 },
  { time: '08:00 PM - 09:00 PM', available: true, courtsAvailable: 3 },
  { time: '09:00 PM - 10:00 PM', available: true, courtsAvailable: 2 }
];
