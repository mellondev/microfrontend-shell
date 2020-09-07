import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MatTabsModule } from '@angular/material/tabs';
import { JobsComponent } from './jobs/jobs.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, JobsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, MatTabsModule ],
  bootstrap: [AppComponent]
})
export class AppModule {}
