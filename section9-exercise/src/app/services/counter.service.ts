import { Injectable } from '@angular/core';

import { UserService } from './user.service';

@Injectable()
export class CounterService {
    activeToInactive: number = 0;
    inActiveToActive: number = 0;

    constructor(private user: UserService){
        this.user.onSet.subscribe(
            (setType: string) => {
                if(setType === 'toInActive') {
                    this.activeToInactive++;
                } else {
                    this.inActiveToActive++;
                }
                console.log(`Active-to-Inactive: ${this.activeToInactive}\n Inactive-to-Active: ${this.inActiveToActive}\n`);
            }
        );
    }
}