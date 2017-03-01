import { AdminService } from '../../admin.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'search-client',
    templateUrl: 'search-client.component.html',
    styleUrls: ['search-client.component.scss']
})
export class SearchClientComponent implements OnInit {

    typedName: string;
    selectedClient: any;
    clients: any[] = [];
    listOfClients: any[] = [];
    @Input() bindModelClients: any;
    @Output() bindModelClientsChange: any = new EventEmitter();

    constructor(private serv: AdminService) { }

    ngOnInit() {
        this.serv.getClients().then((clients: any[]) => {
            this.clients = clients;
        })
    }

    keyUp() {
        if (this.typedName != '')
            this.listOfClients = this.clients.filter((value, index) => value.nome.toLowerCase().indexOf(this.typedName.toLowerCase()) > -1)
        else
            this.listOfClients = [];
    }
    selectClient(client) {
        this.typedName = client.nome;
        this.selectedClient = client;
        this.listOfClients = [];
        this.bindModelClients = client;
        this.bindModelClientsChange.emit(client);
    }
}