import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = '';
  arrayOfServers = ['One','two'];

  constructor(){


  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.arrayOfServers.push(this.serverName)
  }
  clean(){
    this.serverName='';
    this.arrayOfServers=[];
  }

}
