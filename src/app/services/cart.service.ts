import { Injectable, computed, inject, signal } from '@angular/core';
import { Piece } from '../models/piece';
import { PieceService } from './piece.service';

const TAX = 0.0625;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly cartItems = signal<{[key: string]: { quantity: number }}>({});
  readonly pieceService = inject(PieceService);

  readonly cartItemsPlusQuantity = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const piece = this.pieceService.piecesSignal().find((piece) => piece.id === key);

      if(piece) {
        acc.push({
          ...piece,
          quantity: this.cartItems()[key].quantity
        });
      }
      return acc;
    }, [] as Piece[]);
  });

  readonly selectedItemPlusQuantity = computed(() => {
    const key = this.pieceService.selectedPieceSignal()?.id;
    return key ? {
      ...this.pieceService.selectedPieceSignal(),
      quantity: this.cartItems()[key]?.quantity || 0
    } as Piece : undefined;
  });

  readonly featuredPiesPlusQuantity = computed(() => {
    return this.pieceService.featuredPiecesSignal().map((piece) => ({
      ...piece,
      quantity: this.cartItems()[piece?.id]?.quantity || 0
    }))
  });

  readonly subtotal = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const piece = this.pieceService.piecesSignal().find((piece) => piece.id === key);

      if(piece) {
        return acc + ((this.cartItems()[key].quantity || 0) * piece.price);
      }

      return acc;
    }, 0);
  });

  readonly salesTax = computed(() => {
    return this.subtotal() * TAX;
  });

  readonly total = computed(() => {
    return this.subtotal() + this.salesTax() + 10;
  });

  readonly totalItems = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const piece = this.pieceService.piecesSignal().find((piece) => piece.id === key);

      if(piece) {
        return acc + this.cartItems()[key].quantity || 0;
      }

      return acc;
    }, 0);
  });

  addCartItem (piece?: Piece) {
    if(piece){
      this.cartItems.set({
        ...this.cartItems(),
        [piece.id]: {
          quantity: this.cartItems()[piece.id]?.quantity ? this.cartItems()[piece.id].quantity + 1 : 1
        }
      })
    }
  }

  decrementCartItem (piece?: Piece) {
    if(piece) {
      const updatedCartItems = {
        ...this.cartItems(),
        [piece.id]: {
          quantity: this.cartItems()[piece.id]?.quantity ? this.cartItems()[piece.id].quantity - 1 : 0
        }
      }

      if(updatedCartItems[piece.id].quantity <= 0){
        delete updatedCartItems[piece.id];
      }

      this.cartItems.set(updatedCartItems);
    }
  }
}
