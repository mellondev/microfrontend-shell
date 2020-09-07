import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = '';
  constructor(public auth: AuthService) {
    auth.userProfile$.subscribe(x => {
      if (x) {
        console.log(x);
        this.name = x.nickname;
      }
    });
  }

  ngOnInit() {}
}
