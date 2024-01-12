import { Component, inject } from '@angular/core';
import { PieceService } from '../../services/piece.service';
import { NgIf, AsyncPipe, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { ReplaySubject, takeUntil } from 'rxjs';
import { ContactForm } from 'src/app/models/contact-form';
import { ContactService } from 'src/app/services/contact.service';
import { imagesBasicUrl } from 'src/app/shared-ui/constants';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  selector: 'app-customize-view',
  templateUrl: './customize-view.component.html',
  styleUrls: ['./customize-view.component.css']
})
export class CustomizeViewComponent {
  readonly pieceService = inject(PieceService);
  readonly contactService = inject(ContactService);
  readonly imagesBasicUrl = imagesBasicUrl;

  selectedPiece$ = this.pieceService.selectedPiece$;
  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    fullName: '',
    comment: '',
  };
  submitted = false;
  loading = false;

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
      comment: '',
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
