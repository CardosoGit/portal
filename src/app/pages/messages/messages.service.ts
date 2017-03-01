import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MessagesService {
    private urlZenvia: string = 'https://api-rest.zenvia360.com.br/services/send-sms-multiple';
    // private urlZenvia: string = 'https://private-anon-23a41f538c-zenviasms.apiary-proxy.com/services/send-sms';
    private conta: any = {
        user: '',
        senha: ''
    }
    constructor(private af: AngularFire, private _http: Http) { }

    public buscarContatos(): Observable<any> {
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

    public adicionarContato(cliente: any): Promise<any> {
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

    public adicionarTag(tag: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('tags');
            this.getNexId('tags').then(id => {
                var updates = {};
                updates[id] = tag;
                ref.$ref.ref.update(updates, () => {
                    resolve('cadastrado');
                })
            })

        });
    }

    public buscarTags(): Observable<any> {
        return new Observable((observer) => {
            let ref = this.af.database.list('tags');
            ref.$ref.orderByKey().limitToFirst(200).on('value', (data) => {
                let dados: any = data.val();
                let vetor: any[] = [];
                for (let x in dados) {
                    //dados[x].key = x;
                    vetor.push(dados[x]);
                }
                observer.next(vetor);
            });
        });
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
}