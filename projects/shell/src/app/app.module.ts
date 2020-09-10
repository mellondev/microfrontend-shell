import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, JobsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, MatTabsModule, MatButtonModule, MatProgressBarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
