export interface Piece {
  image: string[];
  thumb: string;
  title: string;
  price: number;
  description: string;
  materials: string[];
  category: Category;
  id: string;
  quantity?: number;
}

export enum Category {
  CABINET = 'Cabinet',
  TABLES = 'Tables',
  GARDEN_PIECES = 'Garden pieces',
  ALL = 'All Wooden Pieces'
}
