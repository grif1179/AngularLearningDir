import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent {
    serverId: Number = 10;
    serverName: String = "LOUNWT234";
    serverStatus: String;

    constructor() {
        this.serverStatus = (Math.random() < 0.5) ? 'online' : 'offline';
    }

    getColor() {
        return (this.serverStatus === "online") ? 'green' : 'red';
    }
}