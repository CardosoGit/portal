import { ModalDirective } from 'ng2-bootstrap';
import { BaThemeSpinner } from '../../../../../theme/services/baThemeSpinner';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'list-equip',
    templateUrl: 'list-equip.component.html',
    styles: [`
                .modal{
                     color:black;
                }`
    ]
})

export class ListEquipComponent {
    @ViewChild('childModal') childModal: ModalDirective;
    public equipamentos: any[];
    public equipamentoToRemove: any;
    private sub: any;
    private id: any;
    constructor(private serv: AdminService, private route: ActivatedRoute, private _spinner: BaThemeSpinner) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.serv.getEquipamentos(this.id).then((equipamentos: any[]) => {
                    console.log(equipamentos);
                    this.equipamentos = equipamentos;
                })
            }
            else {

            }

        })

    }

    showChildModal(equipamento: any): void {
        this.equipamentoToRemove = equipamento;
        this.childModal.show();
    }

    removeEquipamento() {
        this.childModal.hide();
        this._spinner.show();
        this.serv.removeEquipamento(this.equipamentoToRemove.equipamentoKey)
            .then((data) => {
                this.serv.getEquipamentos(this.id)
                    .then((equipamentos: any[]) => {
                        this.equipamentos = equipamentos;
                        this._spinner.hide();
                        // this.alerts.push({
                        //     type: 'info',
                        //     msg: `Cliente excluido com sucesso`,
                        //     timeout: 3000
                        // });
                    })
            })

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}