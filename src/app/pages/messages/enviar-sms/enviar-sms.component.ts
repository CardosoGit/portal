import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'enviar-sms',
    templateUrl: 'enviar-sms.component.html'
})
export class EnviarSMSComponent implements OnInit {
    public itemsMenu = [
        {
            desc:'SELECIONAR CONTATOS',
            route:'/pages/messages/enviar-sms/selecionar-contatos'
        },
        {
            desc:'DIGITAR MENSAGEM',
            route:'/pages/messages/envair-sms/mensagem'
        },
        {
            desc:'ENVIAR',
            route:'/pages/messages/enviar-sms/enviar'
        }
    ];
    constructor() { }

    ngOnInit() { }
}