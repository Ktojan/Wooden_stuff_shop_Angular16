import { Component, inject } from '@angular/core';
import { Category } from '../models/piece';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from '../app-route.constants';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { AsyncPipe, KeyValuePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { imagesBasicUrl } from '../shared-ui/constants';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    RouterLink,
    RouterLinkActive,
    NgFor,
    NgIf,
    KeyValuePipe,
    AsyncPipe,
    UpperCasePipe
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly Category = Category;
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  readonly outlets = { [ROUTER_TOKENS.CART]: ROUTER_TOKENS.CHECKOUT };

  private readonly cartService = inject(CartService);
  readonly authService = inject(AuthService);
  isLoggedIn = false;
  currentUser = this.authService.getCurrentUser() || '';
  readonly totalItems = this.cartService.totalItems;
  readonly imagesBasicUrl = imagesBasicUrl;
  
  signInOut(UserName: string) {
    this.authService.setUser(UserName);
    this.isLoggedIn = !!UserName;
  }
}
