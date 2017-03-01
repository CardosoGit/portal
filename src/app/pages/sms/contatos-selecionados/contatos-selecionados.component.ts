import { SMSService } from '../sms.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'contatos-selecionados',
    templateUrl: 'contatos-selecionados.component.html'
})

export class ContatosSelecionadosComponent {
    @Input() contatos: any[];
    @Output() contatosChange: any = new EventEmitter();
    public isEditar: any = 0;
    public _contato: any;
    constructor(private smsServ: SMSService) {

    }

    ngOnInit() {

    }

    remover(contatoToRemove: any) {
        contatoToRemove.checked = false;
        let _contatos = this.contatos.filter(contato => contato != contatoToRemove);
        this.contatos = _contatos;
        this.contatosChange.emit(_contatos);
    }

    salvar(contato: any) {
        let _contato = contato;
        _contato.nome = this._contato;
        this.smsServ.editarCliente(_contato).then(resp => {
            this.isEditar = 0;
            this._contato = '';
        })
    }

}