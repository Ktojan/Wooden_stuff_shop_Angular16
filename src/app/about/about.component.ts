import { Component } from '@angular/core';
import { imagesBasicUrl } from '../shared-ui/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  imagesBasicUrl = imagesBasicUrl;
}
