import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-centered-message',
  template: `<div class="focused-message">
  <h2><ng-content select="[title]"></ng-content></h2>
  <h3><ng-content select="[sub-title]"></ng-content></h3>
  </div>`,
  styles: [`.focused-message {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 20px;
  }
  
  .focused-message h2 {
    font-family: 'Work Sans', sans-serif;
    font-size: 36px;
    font-weight: 800;
    margin: 0 0 18px 0;
    padding: 0;
    text-transform: none;
  }`]
})
export class CenteredMessageComponent {

}
