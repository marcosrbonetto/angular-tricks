import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    serverStatus = 'offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor(){
        return this.serverStatus === 'offline'? 'grey':'green';
    }

}