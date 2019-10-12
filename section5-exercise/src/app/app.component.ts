import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'EventsTest';
    evens: Array<number> = [];
    odds: Array<number> = [];

    onTick(newNum: number) {
        if (newNum % 2 === 0) {
            this.evens.push(newNum);
        } else {
            this.odds.push(newNum);
        }
    }
}
