import { Injectable, signal } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { first, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContactForm(model: ContactForm){
    return timer(1500).pipe(
      tap(() => console.log('Request Submitted:', model)),
      first()
    )
  }
}
