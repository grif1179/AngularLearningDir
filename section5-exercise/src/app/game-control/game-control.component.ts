import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
    @Output() Ticks = new EventEmitter<Number>();
    gameInterval;
    tick: number = 0;

    constructor() { }

    ngOnInit() {
    }

    onStartInterval() {
        this.gameInterval = setInterval(() => {
            console.log("Ticks: " + this.tick);
            this.tick++;
            this.Ticks.emit(this.tick);
        }, 1000);
    }

    onStopInterval() {
        clearInterval(this.gameInterval);
        this.tick = 0;
    }
}
