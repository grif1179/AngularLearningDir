import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer: Boolean = false;
  canShowServerStatus: Boolean = false;
  serverName: String = "test server";
  servers: Array<String> = ["test1", "test2"];

  constructor() { 
    setTimeout(() => {
      this.allowAddServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onEnableCreation() {
    this.canShowServerStatus = true;
    this.servers.push(this.serverName);
  }

  onServerNameChange(event) {
    this.serverName = event.target.value;
  }
}
