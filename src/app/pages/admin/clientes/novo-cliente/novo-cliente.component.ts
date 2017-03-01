import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { CssAtRulePredicateAst } from 'codelyzer/angular/styles/cssAst';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'novo-cliente',
    templateUrl: 'novo-cliente.component.html'
})
export class NovoClienteComponent implements OnInit {
    private clienteUrl = 'http://www.receitaws.com.br/v1/cnpj/20429845000104';
    dadosCnpj: any = {
        fantasia: '',
        nome: '',
        cnpj: '',
        email: '',
        site: '',
        proprietario: '',
        telefone_fixo: '',
        telefone_auxiliar: '',
        logradouro: '',
        numero: '',
        bairro: '',
        municipio: '',
        cep: '',
        uf: ''
    };
    dadosCnpjJSON: any = `{
  "atividade_principal": [
    {
      "text": "Reparação e manutenção de computadores e de equipamentos periféricos",
      "code": "95.11-8-00"
    }
  ],
  "data_situacao": "10/06/2014",
  "complemento": "APT: 252;",
  "nome": "CARDOSO & BRITO LTDA - ME",
  "uf": "RS",
  "telefone": "(55) 3332-4180",
  "email": "escritoriocontabilcontec@hotmail.com",
  "atividades_secundarias": [
    {
      "text": "Comércio varejista especializado de equipamentos e suprimentos de informática",
      "code": "47.51-2-01"
    }
  ],
  "qsa": [
    {
      "qual": "49-Sócio-Administrador",
      "nome": "JOAO CARLOS CARDOSO DA SILVA"
    },
    {
      "qual": "49-Sócio-Administrador",
      "nome": "CLEIA TERESINHA BRITO DA SILVA"
    }
  ],
  "situacao": "ATIVA",
  "bairro": "ALVORADA",
  "logradouro": "R CASEMIRO DE ABREU",
  "numero": "240",
  "cep": "98.700-000",
  "municipio": "IJUI",
  "abertura": "10/06/2014",
  "natureza_juridica": "206-2 - Sociedade Empresária Limitada",
  "fantasia": "OMA TECNOLOGIA",
  "cnpj": "20.429.845/0001-04",
  "ultima_atualizacao": "2016-12-03T09:27:58.075Z",
  "status": "OK",
  "tipo": "MATRIZ",
  "efr": "",
  "motivo_situacao": "",
  "situacao_especial": "",
  "data_situacao_especial": "",
  "capital_social": "20000.00",
  "extra": {}
}`
    constructor(private http: Http, private serv: AdminService, private route: ActivatedRoute) { }
    textsTemplate: any = {
        btnCadastrar: "Cadastrar Cliente"
    }
    private id: any;
    private sub: any;
    showSearchClient: boolean = false;
    ngOnInit() {
        // let data = this.http.get(this.clienteUrl)
        //     .map(this.extractData);
        // data.subscribe(valor => {
        //     console.log(valor);
        // })

        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = params['id'];
                this.dadosCnpj = this.serv.getClient(this.id);
                this.textsTemplate.btnCadastrar = 'Alterar Cliente';
            }
            else {

            }

        })
    }

    private extractData(res: Response) {
        // let body = res.json();
        // return body.data || {};
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }



    public salvarCliente() {
        if (this.textsTemplate.btnCadastrar == 'Alterar Cliente') {
            this.textsTemplate.btnCadastrar = 'Alterando Cliente...';
            this.serv.alterarCliente(this.dadosCnpj).then(data => {
                console.log(data);
                this.textsTemplate.btnCadastrar = 'Cliente Alterado!';
                setTimeout(() => {
                    this.textsTemplate.btnCadastrar = 'Alterar Cliente';
                }, 2000);
            });
        } else if (this.textsTemplate.btnCadastrar == 'Cadastrar Cliente') {
            this.textsTemplate.btnCadastrar = 'Cadastrando Cliente...';
            this.serv.insertCliente(this.dadosCnpj).then(data => {
                console.log(data);
                this.textsTemplate.btnCadastrar = 'Cliente Cadastrado!';
                setTimeout(() => {
                    this.textsTemplate.btnCadastrar = 'Cadastrar Cliente';
                }, 2000);
            })
        }

    }

    public getCnpj() {
        let _data: any = JSON.parse(this.dadosCnpjJSON);
        this.dadosCnpj = {
            fantasia: _data.fantasia,
            nome: _data.nome,
            cnpj: _data.cnpj,
            email: '',
            site: '',
            proprietario: '',
            telefone_fixo: '',
            telefone_auxiliar: '',
            logradouro: _data.logradouro,
            numero: _data.numero,
            bairro: _data.bairro,
            municipio: _data.municipio,
            cep: _data.cep,
            uf: _data.uf,
            data_cadastro: Date.now()
        };

        console.log(this.dadosCnpj);
    }
}