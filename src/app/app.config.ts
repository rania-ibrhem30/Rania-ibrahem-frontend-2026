import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class MyTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) { }

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
}


export function HttpLoaderFactory(http: HttpClient) {
  return new MyTranslateLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};
