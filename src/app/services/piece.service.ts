import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap, delay, mergeMap } from 'rxjs';
import { Category, Piece} from '../models/piece';
import { PIECES } from '../models/pieces-data.mock';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  readonly pieces$ = of(PIECES);
  readonly piecesSignal = toSignal(this.pieces$, {initialValue: []});

  private readonly selectedCategory = new BehaviorSubject<string>(Category.ALL);
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  private readonly route = inject(ActivatedRoute);
  private readonly selectedPiece = this.route.queryParamMap.pipe(
    map((params) => {
      return params.get('productId');
    })
  );

  readonly selectedPiece$ = this.selectedPiece.pipe(
    switchMap((id) =>
      this.filteredPieces$.pipe(
        delay(1500),
        map((pieces) => {
          if(id){
            return pieces.find((piece) => piece.id === id);
          }

          return undefined;
        }),
        tap(res => console.log('piece-service switchMap ', res))
      )
    )
  );

  readonly filteredPieces$ = this.selectedCategory.pipe(
    switchMap((category) => this.pieces$.pipe(
      map((pieces) => {
        if(category === Category.ALL) {
          return pieces;
        }

        return pieces.filter((piece: Piece) => piece.category === category);
      }),
    ))
  );
  readonly filteredPieceSignal = toSignal(this.filteredPieces$, {initialValue: []});

  readonly featuredPieces$ = this.pieces$.pipe(
    map((pieces) => [pieces[2], pieces[3], pieces[4]])
  );
  readonly featuredPiecesSignal = toSignal(this.featuredPieces$, {initialValue: []});
  readonly selectedPieceSignal = toSignal(this.selectedPiece$);

  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
