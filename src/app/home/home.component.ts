import { Component } from '@angular/core';
import { CenteredMessageComponent } from '../shared-ui/centered-message.component';
import { imagesBasicUrl } from '../shared-ui/constants';
import { SubSectionComponent } from './sub-section/sub-section.component';

@Component({
  standalone: true,
  imports: [
    SubSectionComponent,
    CenteredMessageComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  image = imagesBasicUrl + 'home-page.jpg';
}
