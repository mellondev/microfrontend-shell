import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { MicrofrontendService } from './microfrontends/microfontend.service';

export function initializeApp(microfrontendService: MicrofrontendService) {
  return (): Promise<any> => {
    return microfrontendService.initialise();
  };
}

@NgModule({
  declarations: [AppComponent, HomeComponent, JobsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    MatTabsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  providers: [
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
