import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()

export class SMSService {
    private urlZenvia: string = 'https://api-rest.zenvia360.com.br/services/send-sms-multiple';
    // private urlZenvia: string = 'https://private-anon-23a41f538c-zenviasms.apiary-proxy.com/services/send-sms';
    private conta: any = {
        user: '',
        senha: ''
    }

    constructor(private af: AngularFire, private _http: Http) { }

    public adicionarCliente(cliente: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.buscaContatoPorTelefone(cliente.telefone).then(data => {
                if (!data) {
                    let ref = this.af.database.list('smscontatos');
                    this.getNexId('smscontatos').then(id => {
                        var updates = {};
                        updates[id] = cliente;
                        ref.$ref.ref.update(updates, () => {
                            resolve('cadastrado');
                        })
                    })
                }
                else {
                    reject('Contato já Cadastrado!');
                }
            })

        });
    }

    public editarCliente(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let _data: any = {
                nome: data.nome,
                telefone: data.telefone
            };
            let ref = this.af.database.list('smscontatos');
            let updates = {};
            updates[data.key] = _data;
            ref.$ref.ref.update(updates, () => {
                resolve('Alterado');
            })
        })
    }

    private buscaContatoPorTelefone(telefone: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('smscontatos');
            ref.$ref.orderByChild('telefone').equalTo(telefone).on('value', (data) => {
                let dados: any = data.val();
                if (dados) {
                    let vetor: any[] = [];
                    for (let x in dados) {
                        vetor.push(dados[x]);
                    }
                    resolve(vetor[0]);
                }
                else {
                    resolve(dados);
                }

            });
        });
    }

    private getNexId(list: string): Promise<any> {
        let ref = this.af.database.list(list);
        return new Promise<any>((resolve, reject) => {
            ref.$ref.orderByKey().limitToLast(1).once('value', (data) => {
                let dados: any = data.val();
                let key: number = 1;
                for (let x in dados) key = Number(x) + 1;
                resolve(key);
            })
        })
    }

    public buscarClientes(): Observable<any> {
        return new Observable((observer) => {
            let ref = this.af.database.list('smscontatos');
            ref.$ref.orderByKey().limitToFirst(200).on('value', (data) => {
                let dados: any = data.val();
                let vetor: any[] = [];
                for (let x in dados) {
                    dados[x].key = x;
                    vetor.push(dados[x]);
                }
                observer.next(vetor);
            });
        });
    }



    public enviarMensagens(mensagens: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append("Authorization", 'Basic b21hLnRlYy53ZWI6YU1BdzhQUTJ3QQ==');
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            resolve(this._http.post(this.urlZenvia, mensagens, { headers: headers }))
        })
    }
}