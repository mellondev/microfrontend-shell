import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShellEvent } from './shell-event';

@Injectable({
  providedIn: 'root',
})
export class ShellEventService {
  private eventsSubject = new Subject<ShellEvent>();
  events$ = this.eventsSubject.asObservable();

  constructor() {}

  publish(event: ShellEvent) {
    this.eventsSubject.next(event);
    console.log(`ShellEventService.publish: ${event.name}`);
    console.log(event);
  }
}
