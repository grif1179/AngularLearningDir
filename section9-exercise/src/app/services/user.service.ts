import { EventEmitter } from '@angular/core';

import { CounterService } from './counter.service'

export class UserService {
  onSet = new EventEmitter<string>();
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.onSet.emit('toInActive');
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.onSet.emit('toActive');
  }
}