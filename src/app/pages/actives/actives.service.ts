import { AuthService } from '../auth-service';
import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ActiveService {
    equipamentos: any[];

    status2: any = false;
    status: Subject<any>;
    constructor(private af: AngularFire, private authService: AuthService) {
        this.status = new Subject();
        this.authService.getUser().then((user: any) => {
            this.authService.getClient(user.uid, userId => {
                this.getActives(userId);
            });


        })


    }

    getActives(userId: any) {
        let items: FirebaseListObservable<any[]>;
        items = this.af.database.list('/equipamentos', {
            query: {
                orderByChild: 'idCliente',
                equalTo: userId,
                limitToLast: 10
            }
        });
        items.subscribe(data => {
            this.equipamentos = data;
            this.status.next(true);
            this.status2 = true;
        })
    }

    getAllActives() {
        return this.equipamentos;
    }

    getHistoricoEquip(idEquipe: any, callback) {
        let ref = this.af.database.list('chamados');
        ref.$ref.orderByChild('equipamento').equalTo(idEquipe).once('value', data => {
            let dados: any = data.val();
            let vetor: any[] = [];
            for (let x in dados) {
                vetor.push(dados[x]);
            }
            return callback(vetor.sort((a, b) => {
                if (a.data > b.data) return -1;
                if (a.data < b.data) return 1;
                return 0;
            }));

        })
    }
}