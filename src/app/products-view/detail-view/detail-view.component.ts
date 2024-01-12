import { Component, inject } from '@angular/core';
import { NgFor, NgIf, AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from 'src/app/services/cart.service';
import { imagesBasicUrl } from 'src/app/shared-ui/constants';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    CurrencyPipe,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  readonly cartService = inject(CartService)
  readonly imagesBasicUrl = imagesBasicUrl;

  selectedPieceSgn = this.cartService.selectedItemPlusQuantity;
}
