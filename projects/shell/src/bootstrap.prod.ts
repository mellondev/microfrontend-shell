import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


environment.production = true;
enableProdMode();

platformBrowser()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
