import { Category, Piece } from './piece';

export const PIECES: Piece[] = [
  
  {
    id: '5',
    category: Category.TABLES,
    image: ['sonoma-1.jpg','sonoma-3.jpg','sonoma-4.jpg','sonoma-2.jpg','sonoma-5.jpg'],
    thumb:'sonoma-1-thumb.jpg',
    title: 'Sonoma coffee-table',
    materials: [
      'pine',
      'alder',
      'plywood',
      'Finishing: Valtti wood oil',
    ],
    price: 145,
    description: `An elegant and solid coffee-table for dining-room or hall.
    Dimensions(l/w/h): 125x50x48 sm. Features: Decorative gaps under the top (floating effect) and on the top, rectangle
    unusual shaped legs. Bugs: no bugs :-)
    `
  },
  {
    id: '10',
    category: Category.TABLES,
    image: ['casual-patio-1.jpg','casual-patio-2.jpg','casual-patio-3.jpg'],
    thumb:'casual-patio-1-thumb.jpg',
    title: 'Casual patio table',
    materials: [
      'softwood (pine)',
      'Finishing: yacht laquer ',
    ],
    price: 90,
    description: 'A modern minimalistic table good for both inside and outside (patio)'
  },  
  {
    id: '11',
    category: Category.TABLES,
    image: ['ugly-one.png', 'ugly-one-2.png'],
    thumb:'ugly-one-thumb.png',
    title: 'Rural sunshine table',
    materials: [
      'worst lamber we found',
      'some rusted screws',
      'overdue glue',
      'no finishing at all',
    ],
    price: 390.95,
    description: 'We all strive to the best version of ourselves, but ... there are days when we fail, when all fails down. This sunshining masterpiece was born in one of these.'
  },  
  {
    id: '15',
    category: Category.CABINET,
    image: ['parlor-bookcase-1.jpg', 'parlor-bookcase-2.jpg'],
    thumb:'parlor-bookcase-1-thumb.jpg',
    title: 'Parlor mini-bookcase',
    price: 55,
    materials: [
      'softwood (pine)',
      'plywood for carcase and shelves',
      'Finishing: Varnish PF-170 2 layers',
    ],
    description: 'For books and different small things, for pistols or knives also'
  },
  {
    id: '20',
    category: Category.CABINET,
    image: ['tiny-wall-1.jpg', 'tiny-wall-2.jpg'],
    thumb:'tiny-wall-1-thumb.jpg',
    title: 'Tiny wall cabinet',
    price: 39.95,
    materials: [
      'softwood (pine)',
      'plywood for back',
      'Finishing: Varnish PF-170',
    ],
    description: 'Can be standalone or tied to a module(strikethrough) a wall'
  },  
  {
    id: '35',
    category: Category.GARDEN_PIECES,
    image: ['minimalistic-bench-1.jpg', 'minimalistic-bench-2.jpg'],
    thumb:'minimalistic-bench-1-thumb.jpg',
    title: 'Minimalistic garden bench',
    price: 62,
    materials: [
      'softwood (pine)',
      'yacht laquer 2 layers',
    ],
    description: 'No single screw of nail!'
  },
  {
    id: '40',
    category: Category.GARDEN_PIECES,
    image: ['public-bench-1.jpg', 'public-bench-2.jpg'],
    thumb:'public-bench-1-thumb.jpg',
    title: 'Public Park Bench (restoration)',
    price: 0,
    materials: [
      'softwood (pine)',
      'yacht laquer',
    ],
    description: 'Repair of public garden one'
  },
  {
    id: '45',
    category: Category.ALL,
    image: ['chest-19century-0.jpg', 'chest-19century-1.jpg', 'chest-19century-2.jpg'],
    thumb:'chest-19century-1-thumb.jpg',
    title: '19-century chest restored',
    price: 280,
    materials: [
      'aspen',
      'chestnut',
      'plywood',
      'finishing: wood oil'
    ],
    description: 'Rebuilding of 1870s year oldman. 6 days of work'
  }
];
