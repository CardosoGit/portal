import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../../messages.service';
@Component({
    selector: 'lista-contatos',
    templateUrl: 'lista-contatos.component.html'
})
export class ListaContatosComponent implements OnInit {
    public contatos: any[] = [];
    constructor(private messServ: MessagesService) { }

    ngOnInit() {
        this.messServ.buscarContatos().subscribe(contatos => {
            this.contatos = contatos;
        })
    }
}