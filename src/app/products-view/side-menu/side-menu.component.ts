import { Component, Input, inject } from '@angular/core';
import { PieceService } from '../../services/piece.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PRODUCT_ROUTER_TOKENS } from '../products.routes';
import { imagesBasicUrl } from 'src/app/shared-ui/constants';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    MatTooltipModule,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Input() customize = false;

  private readonly pieceService = inject(PieceService);
  pieces$ = this.pieceService.filteredPieces$;

  readonly PRODUCT_ROUTER_TOKENS = PRODUCT_ROUTER_TOKENS;
  readonly customizeLink = `./${PRODUCT_ROUTER_TOKENS.CUSTOMIZE}`;
  readonly detailLink = `./${PRODUCT_ROUTER_TOKENS.DETAIL}`;
  readonly imagesBasicUrl = imagesBasicUrl;
}
