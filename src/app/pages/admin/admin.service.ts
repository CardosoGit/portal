import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class AdminService {
    private clientes: any[];
    private chamados: any[];
    constructor(private af: AngularFire) { }

    insertCliente(dadosCliente) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('users');
            dadosCliente.clientKey = ref.$ref.ref.push().key;
            var updates = {};
            updates[dadosCliente.clientKey] = dadosCliente;
            ref.$ref.ref.update(updates, () => {
                resolve('cadastrado');
            })

        });
    }

    getClient(id: any) {
        console.log(this.clientes);
        let cliente = this.clientes.filter((value, key) => {
            return value.clientKey == id;
        })
        console.log(cliente);
        return cliente[0];
    }

    alterarCliente(dadosCliente) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('users/' + dadosCliente.clientKey);
            ref.$ref.ref.set(dadosCliente, (data) => {
                resolve('alterado');
            })
        });
    }

    getClients() {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('users');
            ref.$ref.orderByKey().on('value', (data) => {
                let dados: any = data.val();
                let vetor: any[] = [];
                for (let x in dados) {
                    vetor.push(dados[x]);
                }
                this.clientes = vetor;
                resolve(vetor);
            });
        });


    }

    removeCliente(id: any) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('users/' + id);
            ref.$ref.ref.set(null, (data) => {
                resolve('Cliente excluido');
            })
        })
    }

    getEquipamentos(id: any) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('equipamentos');
            ref.$ref.orderByChild('idCliente').equalTo(id).once('value', (data) => {
                let dados: any = data.val();
                let vetor: any[] = [];
                for (let x in dados) {
                    vetor.push(dados[x]);
                }
                this.clientes = vetor;
                resolve(vetor);
            });
        })
    }

    insertEquipamento(idCliente: any, dadosEquipamento: any) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('equipamentos');
            dadosEquipamento.equipamentoKey = ref.$ref.ref.push().key;
            dadosEquipamento.idCliente = idCliente;
            var updates = {};
            updates[dadosEquipamento.equipamentoKey] = dadosEquipamento;
            ref.$ref.ref.update(updates, () => {
                resolve('cadastrado');
            })

        });
    }

    alterarEquipamento(dadosEquipamento: any) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('equipamentos/' + dadosEquipamento.equipamentoKey);
            ref.$ref.ref.set(dadosEquipamento, (data) => {
                resolve('alterado');
            })
        });
    }
    getEquipamento(id: any) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('equipamentos/');
            ref.$ref.orderByChild('equipamentoKey').equalTo(id).once('value', (data) => {
                let dados: any = data.val();
                resolve(dados[id]);
            });
        })
    }

    removeEquipamento(id: any) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('equipamentos/' + id);
            ref.$ref.ref.set(null, (data) => {
                resolve('Cliente excluido');
            })
        })
    }

    insertChamado(dadosChamado) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('chamados');
            this.getNexId().then(id => {
                dadosChamado.chamadoKey = id;
                var updates = {};
                updates[dadosChamado.chamadoKey] = dadosChamado;
                ref.$ref.ref.update(updates, () => {
                    resolve('cadastrado');
                })
            })
        });
    }

    private getNexId(): Promise<any> {
        let ref = this.af.database.list('chamados');
        return new Promise<any>((resolve, reject) => {
            ref.$ref.orderByKey().limitToLast(1).once('value', (data) => {
                let dados: any = data.val();
                let key: number = 1;
                for (let x in dados) key = Number(x) + 1;
                resolve(key);
            })
        })
    }

    getChamados() {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('chamados');
            ref.$ref.orderByKey().on('value', (data) => {
                let dados: any = data.val();
                let vetor: any[] = [];
                for (let x in dados) {
                    vetor.push(dados[x]);
                }
                this.chamados = vetor;
                resolve(vetor);
            });
        });
    }

    getChamado(id: any) {
        let chamado = this.chamados.filter((value, key) => {
            return value.chamadoKey == id;
        })
        console.log(chamado);
        return chamado[0];
    }

    alterarChamado(dadosChamado) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('chamados/' + dadosChamado.chamadoKey);
            ref.$ref.ref.set(dadosChamado, (data) => {
                resolve('alterado');
            })
        });
    }

    removeChamado(id: any) {
        return new Promise((resolve, reject) => {
            let ref = this.af.database.list('chamados/' + id);
            ref.$ref.ref.set(null, (data) => {
                resolve('Chamado excluido');
            })
        })
    }
}