import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { CadOSService } from '../cad-os.service';
import { Component, ModuleWithProviders } from '@angular/core';

@Component({
    selector: 'novo-equip',
    templateUrl: 'novo-equip.html',
    styleUrls: ['novo-equip.scss']
})

export class NovoEquipComponent {
    equipamento: any = {};
    textsTemplate: any = {
        btnCadastrar: "Cadastrar"
    }

    tipo_equipamento: any = '';
    tipos_equipamento: any[] = [
        {
            value: 'computador',
            nome: 'Computador'
        },
        {
            value: 'impressora',
            nome: 'Impressora'
        }
    ];
    private sub: any;
    private idClient: any;
    constructor(private serv: AdminService, private route: ActivatedRoute, ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.idClient = params['id'];
                if (params['idequip']) {
                    this.serv.getEquipamento(params['idequip']).then(equipamento => {
                        this.equipamento = equipamento;
                    })
                    this.textsTemplate.btnCadastrar = 'Alterar';
                }

            }
            else {

            }

        })
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    alterar() {
        if (this.textsTemplate.btnCadastrar == 'Alterar') {
            this.textsTemplate.btnCadastrar = "Alterando ...";
            this.serv.alterarEquipamento(this.equipamento).then(data => {
                this.textsTemplate.btnCadastrar = "Sucesso ao Alterar!";
                setTimeout(() => {
                    this.textsTemplate.btnCadastrar = "Alterar";
                }, 2000)
            })
        } else if (this.textsTemplate.btnCadastrar == 'Cadastrar') {
            this.textsTemplate.btnCadastrar = "Cadastrando ...";
            this.serv.insertEquipamento(this.idClient, this.equipamento).then(data => {
                this.textsTemplate.btnCadastrar = "Sucesso ao Cadastrar!";
                setTimeout(() => {
                    this.textsTemplate.btnCadastrar = "Cadastrar";
                }, 2000)
            })
        }

    }
}