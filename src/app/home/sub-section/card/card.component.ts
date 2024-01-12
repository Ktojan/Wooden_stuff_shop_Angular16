import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { imagesBasicUrl } from 'src/app/shared-ui/constants';
import { ROUTER_TOKENS } from '../../../app-route.constants';
import { Piece } from '../../../models/piece';
import { CartService } from '../../../services/cart.service';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    CurrencyPipe
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() piece!: Piece;
  readonly cartService = inject(CartService);
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly imagesBasicUrl = imagesBasicUrl;

  selectPiece(piece: Piece) {
    this.router.navigate([`../${ROUTER_TOKENS.SHOP}`, piece.category, 'detail'], {
      relativeTo: this.activatedRoute, queryParams: { productId: piece.id }
    });
  }
}

