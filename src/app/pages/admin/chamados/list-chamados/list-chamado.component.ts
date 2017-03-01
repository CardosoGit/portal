import { BaThemeSpinner } from '../../../../theme/services/baThemeSpinner';
import { AdminService } from '../../admin.service';
import { ModalDirective } from 'ng2-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'list-chamados',
    templateUrl: 'list-chamado.component.html',
    styles: [`
            .modal{
            color:black;
        }`
    ]
})
export class ListChamadoComponent {
    public chamados: any[] = [];
    public alerts: any = [];
    @ViewChild('childModal') childModal: ModalDirective;
    private chamadoToRemove: any;
    constructor(private serv: AdminService, private router: Router,
        route: ActivatedRoute, private _spinner: BaThemeSpinner) { }

    ngOnInit() {
        this.serv.getChamados().then((chamados: any[]) => {
            this.chamados = chamados;
        })
    }

    showChildModal(chamado: any): void {
        this.chamadoToRemove = chamado;
        this.childModal.show();
    }

    hideChildModal(): void {
        this.childModal.hide();
    }

    removeChamado() {
        this.childModal.hide();
        this._spinner.show();
        this.serv.removeChamado(this.chamadoToRemove.chamadoKey)
            .then((data) => {
                this.serv.getChamados()
                    .then((chamados: any[]) => {
                        this.chamados = chamados;
                        this._spinner.hide();
                        this.alerts.push({
                            type: 'info',
                            msg: `Chamado excluido com sucesso`,
                            timeout: 3000
                        });
                    })
            })
    }

}