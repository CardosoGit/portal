import { Observable } from 'rxjs/Rx';
import { AuthService } from '../auth-service';
import { Injectable } from '@angular/core';

import { chamados } from './database';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class DashboardService {
    chamadas: any[];
    items: FirebaseListObservable<any[]>;
    userId: Subject<any>;
    isRecebido: Subject<any>;
    constructor(private af: AngularFire, private authService: AuthService) {
        this.userId = new Subject();
        this.isRecebido = new Subject();
        this.items = this.af.database.list('/chamados', {
            query: {
                orderByChild: 'clientKey',
                equalTo: this.userId
            }
        });
        this.items.subscribe(chamados => {
            this.chamadas = chamados;
            this.isRecebido.next(true);
        })
        this.authService.getUser().then((user: any) => {
            this.authService.getClient(user.uid, userId => {
                this.userId.next(userId);
            });
        })


    }

    getTypeSuport() {
        return this.getList(this.chamadas, 'tipo_suporte');
    }

    getTypeServices() {
        return this.getList(this.chamadas, 'tipo_servico');
    }

    getTypeAtendimentos() {
        return this.getList(this.chamadas, 'tipo_atendimento');
    }
    getTimeToResolution() {
        return this.getList(this.chamadas, 'tempo_atendimento');
    }

    getMainProblems() {
        return this.getList(this.chamadas, 'problema');
    }

    getRankingActiveBad() {
        return this.getList(this.chamadas, 'equipamento');
    }

    getAbertos() {
        let abertas = this.chamadas.filter(value => value.status == 'aberto').sort((a, b) => {
            if (a.data > b.data) return -1;
            if (a.data < b.data) return 1;
            return 0;
        });
        return abertas.slice(0, 5);
    }

    getLastCalls() {
        let ultimasChamadas = this.chamadas.sort((a, b) => {
            if (a.data > b.data) return -1;
            if (a.data < b.data) return 1;
            return 0;
        });
        return ultimasChamadas.slice(0, 6);
    }

    private getList(chamadas: any[], item: any) {
        let principais: any[] = chamadas.map(chamado => chamado[item]);
        let arr: any[];
        let arr_unique: Array<any> = [...Array.from(new Set(principais))];
        arr = arr_unique.map(problema => {
            let qtdProblem = principais.reduce((prev, curr) => {
                if (curr == problema) return prev + 1;
                else return prev;
            }, 0)
            return {
                desc: problema,
                qtd: qtdProblem
            }
        })
        let lista = arr.sort((a, b) => {
            if (a.qtd > b.qtd) return -1;
            if (a.qtd < b.qtd) return 1;
            return 0;
        });
        return lista;
    }



}

