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
export class AppComponent implements OnInit {
  userName: string;
  microfrontends: Microfrontend[] = [];

  private _loading = new BehaviorSubject<boolean>(true);
  loading$ = this._loading.asObservable();

  constructor(private router: Router, public auth: AuthService, public mfService: MicrofrontendService) {}

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.mfService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
    console.log(this.microfrontends);
    console.log(routes);
    this._loading.next(false);
  }
}
