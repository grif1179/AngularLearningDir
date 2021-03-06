import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private user: UserService){}

  onSetToInactive(id: number) {
    this.user.setToInactive(id);
  }
}
