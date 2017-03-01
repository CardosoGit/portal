import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

import { AuthService } from '../auth-service';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class CallsService {
    public chamadas: any[];
    private s_userId: string;
    constructor(private af: AngularFire, private authService: AuthService) {
    }

    getChamados(): Promise<any> {
        let ref = this.af.database.list('chamados');
        return new Promise((resolve, reject) => {
            this.getUserId().then(userId => {
                ref.$ref.orderByChild('clientKey').equalTo(userId).once('value', data => {
                    this.chamadas = this._getVector(data.val())
                    resolve(this.chamadas);
                })
            })

        })
    }

    private getUserId(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.getUser().then((user: any) => {
                this.authService.getClient(user.uid, userId => {
                    this.s_userId = userId;
                    resolve(userId);
                });
            })
        })

    }

    getEquipamentos() {
        let ref = this.af.database.list('equipamentos');
        return new Promise((resolve, reject) => {
            ref.$ref.orderByChild('idCliente').equalTo(this.s_userId).once('value', data => {
                let dados: any = data.val();
                let vetor: any[] = [];
                for (let x in dados) {
                    vetor.push(dados[x]);
                }
                resolve(vetor);
            })
        })

    }

    getChamado(idChamado: any) {
        return this.chamadas.filter((value) => value.chamadoKey == idChamado);
    }

    private _getVector(data: any) {
        let vector: any[] = [];
        for (let x in data) {
            vector.push(data[x]);
        }
        return vector;
    }



}