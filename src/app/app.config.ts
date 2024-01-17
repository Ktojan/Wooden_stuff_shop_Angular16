import { provideAnimations } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom, isDevMode } from "@angular/core";
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from "@angular/router";
import { ROUTES } from "./app.routes";
import { TranslocoHttpLoader } from './shared-ui/transloco.loader';
import {
  TranslocoModule,
  provideTransloco
} from "@ngneat/transloco";

// import locales
import localePt from "@angular/common/locales/pt";
import localeGb from "@angular/common/locales/en-GB";
import localeUa from "@angular/common/locales/ru-UA";

registerLocaleData(localePt, "pt");
registerLocaleData(localeGb, "en-GB");
registerLocaleData(localeUa, "ua");

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(
      ROUTES,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    importProvidersFrom(TranslocoModule),
    provideTransloco({
      config: {
          availableLangs: ['en', 'pt', 'ua'],
          defaultLang: 'en',
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
  })
  ],
};
