import { setTimeout } from 'timers';
import { BaThemeSpinner } from '../../../../theme/services/baThemeSpinner';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    selector: 'list-clientes',
    templateUrl: 'list-clientes.component.html',
    styleUrls: ['list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit {
    public clientes: any[] = [];
    public alerts: any = [];
    @ViewChild('childModal') childModal: ModalDirective;
    private clienteToRemove: any;
    constructor(private serv: AdminService, private router: Router,
        route: ActivatedRoute, private _spinner: BaThemeSpinner) { }

    ngOnInit() {
        this.serv.getClients().then((clientes: any[]) => {
            this.clientes = clientes;
        })
    }

    ngOnChanges(): void {
        console.log('change');
    }

    showChildModal(cliente: any): void {
        this.clienteToRemove = cliente;
        this.childModal.show();
    }

    hideChildModal(): void {
        this.childModal.hide();
    }

    removeCliente() {
        this.childModal.hide();
        this._spinner.show();
        this.serv.removeCliente(this.clienteToRemove.clientKey)
            .then((data) => {
                this.serv.getClients()
                    .then((clientes: any[]) => {
                        this.clientes = clientes;
                        this._spinner.hide();
                        this.alerts.push({
                            type: 'info',
                            msg: `Cliente excluido com sucesso`,
                            timeout: 3000
                        });
                    })
            })
    }
}