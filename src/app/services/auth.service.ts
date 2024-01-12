import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly user = new BehaviorSubject<string | undefined>(undefined);
  readonly user$ = this.user.asObservable();

  setUser(name?: string) {
    this.user.next(name);
  }

  getCurrentUser() {
    return this.user$;
  }
}
