import { Component } from '@angular/core';
import { CenteredMessageComponent } from '../shared-ui/centered-message.component';
import { imagesBasicUrl } from '../shared-ui/constants';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [CenteredMessageComponent],
  templateUrl: './not-authorized.component.html',
})
export class NotAuthorizedComponent {
  readonly imagesBasicUrl = imagesBasicUrl;
}
