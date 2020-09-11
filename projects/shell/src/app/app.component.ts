import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '@mellondev/shell-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userName: string;
  private _loading = new BehaviorSubject<boolean>(true);
  loading$ = this._loading.asObservable();
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this._loading.next(false);
  }

  
}
