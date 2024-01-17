import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { ContactForm } from '../models/contact-form';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { AuthService } from '../services/auth.service';
import { imagesBasicUrl } from '../shared-ui/constants';
import { FromSubmittedComponent } from '../shared-ui/form-submitted.component';
import { LocaleTogglerComponent } from '../shared-ui/locale-toggler.component';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    FromSubmittedComponent,
    LocaleTogglerComponent,
    TranslocoPipe
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnDestroy, OnInit{
  readonly contactService = inject(ContactService);
  readonly authService = inject(AuthService);
  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    fullName: '',
    whiskey: true,
    size: 1,
    comment: '',
  };
  submitted = false;
  loading = false;
  sizes = Array(5).fill(0).map((_, i) => i+1);
  imagesBasicUrl = imagesBasicUrl;
  
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(name => this.model.fullName = name ?? '');
  }

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService.submitContactForm(model).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.loading = false;
    })
  }

  clearForm() {
    this.submitted = false;
    this.model = {
      fullName: '',
      whiskey: true,
      size: 1,
      comment: '',
    };
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
