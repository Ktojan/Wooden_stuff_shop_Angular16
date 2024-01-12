import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { timer } from 'rxjs';
import { imagesBasicUrl } from './constants';

@Component({
  selector: "form-submitted",
  templateUrl: "form-submitted.component.html",
  standalone: true,
  imports: [MatProgressSpinnerModule, NgIf],
  styles: [
    `
      .form-wrapper {
        width: 55%;
        min-width: 400px;
        align-items: center;
        display: flex;
        flex-direction: row;
      }
      .form-wrapper-spinner {
        align-items: center;
      }
      .form-wrapper button {
        border: 0;
        color: rgba(54, 48, 44, 1);
        font-size: 16px;
        height: 51px;
        text-transform: uppercase;
        width: 219px;
      }
      .image-wrapper {
        width: 50%;
        margin: 0 30px;
      }
      .image-wrapper img {
        width: 100%;
      }
    `,
  ],
})
export class FromSubmittedComponent {
  @Output() reset = new EventEmitter();
  readonly imagesBasicUrl = imagesBasicUrl;
  loading = true;

  clearForm() {
    this.reset.emit();
  }

  ngOnInit(): void {
    timer(1200).subscribe(() => {
      // to emulate server delay on submitting
      this.loading = false;
    });
  }
}
