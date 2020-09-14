import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
  bootstrap: [AppComponent],
})
export class AppModule {}
