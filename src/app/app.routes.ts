import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';
import { authRouteGuard } from './auth-route-guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ROUTER_TOKENS } from './app-route.constants';
import { ProductsViewComponent } from './products-view/products-view.component';
import { PRODUCT_ROUTES } from './products-view/products.routes';
import { AboutComponent } from './about/about.component';
import { AuthService } from './services/auth.service';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTER_TOKENS.HOME,
    pathMatch: 'full',
  },
  {
    path: ROUTER_TOKENS.HOME,
    component: HomeComponent,
  },
  {
    path: `${ROUTER_TOKENS.SHOP}/:categoryId` ,
    component: ProductsViewComponent,
    children: PRODUCT_ROUTES
    // loadChildren: () => import('./products-view/products.routes').then(m => m.PRODUCT_ROUTES),
  },
  {
    path: ROUTER_TOKENS.CONTACT,
    component: ContactComponent,
    canActivate: [
      authRouteGuard()
    ]
  },
  {
    path: ROUTER_TOKENS.NOT_AUTH,
    component: NotAuthorizedComponent,
  }, 
  {
    path: ROUTER_TOKENS.ABOUT,
    component: AboutComponent,
  },
  {
    path: ROUTER_TOKENS.CHECKOUT,
    outlet: ROUTER_TOKENS.CART,
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
