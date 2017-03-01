import { SMSService } from '../sms.service';
import { Component } from '@angular/core';

@Component({
    selector: 'cad-cliente',
    templateUrl: 'cad-cliente.component.html'
})

export class CadClienteComponent {
    public data: any = {
        nome: '',
        telefone: ''
    }
    public error: string;
    public showError: boolean = false;
    constructor(private smsServ: SMSService) { }

    salvarCliente() {
        this.showError = false;
        this.smsServ.adicionarCliente(this.data).then(data => {
            this.data.nome = '';
            this.data.telefone = '';
        }).catch(err => {
            console.log(err);
            this.showError = true;
            this.error = err;
        })
    }
}