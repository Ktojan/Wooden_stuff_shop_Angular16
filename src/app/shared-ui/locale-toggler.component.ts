import { NgForOf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslocoService } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: "locale-toggler",
  template: `<select [(ngModel)]="currentLoc" (ngModelChange)="updateLocale($event)" class="select-lang">
    <option *ngFor="let locale of locales" [value]="locale.value">
      {{ locale.label }}
    </option>
  </select>
  `,
  styleUrls: ['locale-toggler.component.css'],
  imports: [ FormsModule, NgForOf ]
})
export class LocaleTogglerComponent {
  constructor() {
    this.detectedLocale = this.getUsersLocale('en-US');

    // generate a regex from the locales we support
    const supportedRegex = new RegExp('^' + this.locales.map(l => l.value.substring(0, 2)).join('|^'));
    // check if the user's preferred language is supported and if so, use it.
    if (this.detectedLocale.match(supportedRegex)) {
      this.updateLocale(this.detectedLocale);
    }
  }
  translocoService = inject(TranslocoService);

  locales = [
    { label: '🇺🇸 English ', value: 'en-US' },
    { label: '🇵🇹 Portuguese', value: 'pt-PT' },
    { label: '🇺🇦 Ukrainian', value: 'ua' }
  ];
  detectedLocale = '';
  currentLoc: string = this.locales[0].value;
  

  getUsersLocale(defaultValue: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    return lang;
  }

  // change locale/language at runtime
  updateLocale(locale: string) {
    console.log('update locale', locale);
    if (this.locales.some(l => l.value === locale)) {
      this.currentLoc = locale;
    }
    const lang = locale.substring(0, 2);
    this.translocoService.setActiveLang(lang);
  }
}
