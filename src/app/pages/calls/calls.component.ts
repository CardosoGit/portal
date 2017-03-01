import { ModalDirective } from 'ng2-bootstrap';
import { BaThemeSpinner } from '../../theme/services/baThemeSpinner';
import { CallsService } from './calls.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicTablesService } from '../tables/components/basicTables/basicTables.service';

//import { DetailCallModal } from '../modals/detailCallModal/detailCallModal.component';

@Component({
    selector: 'calls',
    styles: [require('./calls.scss')],
    template: require('./calls.html')
})

export class CallsComponent {
    chamadas: Array<any> = [];
    data: any;
    @ViewChild('childModal') childModal: ModalDirective;

    constructor(private callServ: CallsService, private _spinner: BaThemeSpinner) {
        this.data = {
            avaliacao: 3
        }
    }

    ngOnInit() {
        this._spinner.show();
        this.callServ.getChamados().then(chamados => {
            this.chamadas = chamados;
            console.log(chamados);
            this._spinner.hide();
        })

    }

    showChildModal(idChamado): void {
        this.data = this.callServ.getChamado(idChamado)[0];
        console.log(this.data);
        this.childModal.show();
    }

    hideChildModal(): void {
        this.childModal.hide();
    }

}