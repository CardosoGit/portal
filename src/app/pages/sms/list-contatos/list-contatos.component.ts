import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SMSService } from '../sms.service';

@Component({
    selector: 'list-contatos',
    templateUrl: 'list-contatos.component.html',
    styles: [`
        .list-contatos{

        }
    `]
})

export class ListContatosComponent {
    public checkboxPropertiesMapping = {
        model: 'checked',
        value: 'name',
        label: 'name',
        baCheckboxClass: 'class'
    };
    public clientes: any[];
    private _checkeds: any[];
    @Input() bindModelContatos: any;
    @Output() bindModelContatosChange: any = new EventEmitter();

    constructor(private smsServ: SMSService) {
        smsServ.buscarClientes().subscribe((clientes: any[]) => {
            this.clientes = clientes;
            this.clientes.map(cliente => {
                let _cliente = cliente;
                _cliente.name = cliente.nome + ' ----------->> ' + cliente.telefone;
                _cliente.checked = false;
                _cliente.class = 'col-md-12';
                return _cliente;
            })
            if (this._checkeds) {
                this._checkeds.forEach(checked => {
                    console.log(checked.key);
                    this.clientes[Number(checked.key) ].checked = true;
                })
            }
        })
    }

    change(ev) {
        this._checkeds = this.clientes.filter(cliente => cliente.checked === true);
        this.bindModelContatos = this._checkeds;
        this.bindModelContatosChange.emit(this._checkeds);
    }

}