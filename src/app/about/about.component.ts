import { Component } from '@angular/core';
import { imagesBasicUrl } from '../shared-ui/constants';
import { LocaleTogglerComponent } from '../shared-ui/locale-toggler.component';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  imports: [LocaleTogglerComponent, TranslocoPipe],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true
})
export class AboutComponent {
  imagesBasicUrl = imagesBasicUrl;
}
