import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShellCoreService {

  loginStatus: string;

  constructor() { 
    this.loginStatus = 'Logged in';
  }
}
