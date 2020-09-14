import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '@mellondev/shell-core';
import { MicrofrontendService } from './microfrontends/microfontend.service';
import { Microfrontend } from './microfrontends/microfrontend';
import { buildRoutes } from './utils/route-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string;

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(public auth: AuthService, public mfeService: MicrofrontendService) {
  }

}
