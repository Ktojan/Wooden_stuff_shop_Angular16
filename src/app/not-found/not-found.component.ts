import { Component } from '@angular/core';
import { CenteredMessageComponent } from '../shared-ui/centered-message.component';
import { imagesBasicUrl } from '../shared-ui/constants';

@Component({
  standalone: true,
  imports: [
    CenteredMessageComponent,
  ],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  readonly imagesBasicUrl = imagesBasicUrl;
}
