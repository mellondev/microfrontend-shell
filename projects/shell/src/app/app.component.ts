import { Component } from '@angular/core';
import { AuthService } from 'md-shell-core';
import { BehaviorSubject } from 'rxjs';
import { MicrofrontendService } from './microfrontends/microfontend.service';

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
