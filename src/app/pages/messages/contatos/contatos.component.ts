import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contatos',
    templateUrl: 'contatos.component.html',
    styles:[`.menu-comp {
        margin-bottom:30px;
    }`]
})
export class ContatosComponent implements OnInit {
    public itemsMenu = [
        {
            desc:'LISTA CONTATOS',
            route:'/pages/messages/contatos/lista'
        },
        {
            desc:'NOVO CONTATO',
            route:'/pages/messages/contatos/novo'
        }
    ];
    constructor() { }

    ngOnInit() { }
}