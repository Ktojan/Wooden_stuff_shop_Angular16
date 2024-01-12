import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from '../services/contact.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { ContactForm } from '../models/contact-form';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { ROUTER_TOKENS } from '../app-route.constants';
import { AuthService } from '../services/auth.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { imagesBasicUrl } from '../shared-ui/constants';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    AsyncPipe,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  readonly cartService = inject(CartService);
  readonly router = inject(Router);
  readonly contactService = inject(ContactService);
  readonly authService = inject(AuthService);
  readonly cartItemsPlusQuantity = this.cartService.cartItemsPlusQuantity;
  readonly subtotal = this.cartService.subtotal;
  readonly salesTax = this.cartService.salesTax;
  readonly total = this.cartService.total;
  readonly shipFee = 10;
  readonly imagesBasicUrl = imagesBasicUrl;
  
  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {fullName: ''};
  submitted = false;
  loading = false;
  orderNumber = Math.floor(Math.random()*1000);
  isLoggedIn$ = this.authService.getCurrentUser();
  
  checkout() {
    this.loading = true;

    this.contactService.submitContactForm(this.model).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.submitted = true;
      this.loading = false;
      this.cartService.cartItems.set({});
    })
  }

  close() {
    this.router.navigate([{ outlets: { [ROUTER_TOKENS.CART]: null } }], {
      queryParamsHandling: 'merge'
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
