import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CounterService]
})
export class AppComponent implements OnInit {
  activeUsers: Array<string>;
  inactiveUsers: Array<string>;
  constructor(private user: UserService, private counter: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.user.activeUsers;
    this.inactiveUsers = this.user.inactiveUsers;
  }
}