import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'lista-contatos-content',
    templateUrl: 'lista.component.html'
})
export class ListaComponent implements OnInit {
    @Input() contatos:any;
    public contatosFiltrados:any[] = this.contatos;
    constructor() { }

    ngOnInit() { }
}