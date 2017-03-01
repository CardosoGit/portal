import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { AdminService } from '../../admin.service';
import { Component } from '@angular/core';

@Component({
    selector: 'novo-chamado',
    templateUrl: 'novo-chamado.component.html'
})

export class NovoChamadoComponent {
    public cliente: any;
    public mytime: any;
    public ismeridian: boolean = true;
    public chamado: any = {};
    textsTemplate: any = {
        btnCadastrar: "Cadastrar"
    }
    public dt: Date;
    public minDate: Date = void 0;
    private id: any;
    private sub: any;
    constructor(private admServ: AdminService, private http: Http, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.chamado = this.admServ.getChamado(this.id);
                this.dt = new Date(this.chamado.data) ;

                this.textsTemplate.btnCadastrar = 'Alterar';
            }
            else {

            }

        })
    }

    select($ev) {
        console.log($ev);
    }

    add() {
        if (this.textsTemplate.btnCadastrar == 'Alterar') {
            this.textsTemplate.btnCadastrar = 'Alterando Chamado...';
            this.admServ.alterarChamado(this.chamado).then(data => {
                this.textsTemplate.btnCadastrar = 'Chamado Alterado!';
                setTimeout(() => {
                    this.textsTemplate.btnCadastrar = 'Alterar';
                }, 2000);
            });
        } else if (this.textsTemplate.btnCadastrar == 'Cadastrar') {
            this.chamado.data = this.dt.getTime();
            this.chamado.clientKey = this.cliente.clientKey;
            this.chamado.clientNome = this.cliente.nome;
            this.textsTemplate.btnCadastrar = 'Cadastrando Chamado...';
            this.admServ.insertChamado(this.chamado).then(data => {
                this.textsTemplate.btnCadastrar = 'Chamado Cadastrado!';
                setTimeout(() => {
                    this.textsTemplate.btnCadastrar = 'Cadastrar';
                }, 2000);
            })
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}