import {Component} from '@angular/core';
import {UsersService} from './services/users.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {
  constructor(private  counterService: CounterService) {
  }

  getToInactive(): number {
    return this.counterService.getActiveToInactive;
  }

  getToActive(): number {
    return this.counterService.getInactiveToActive;
  }
}
