import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export function authRouteGuard(){
  return () => {
    const authService = inject(AuthService);
    let isLogged = false;
    authService.getCurrentUser().subscribe(us => isLogged = !!us);
    return isLogged;
  }
}
