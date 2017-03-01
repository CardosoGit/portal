import { Router } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {

    private usuarioAutenticado: boolean;
    constructor(private af: AngularFire, private router: Router) {
    }

    public getUser() {
        return new Promise((resolve, reject) => {
            resolve(this.af.auth.getAuth());
        });

    }

    public getClient(userId: any, callback) {
        let ref = this.af.database.list('users');
        ref.$ref.orderByChild('uid').equalTo(userId).once('value', data => {
            let dados: any = data.val();
            let vetor: any[] = [];
            for (let x in dados) {
                vetor.push(dados[x]);
            }
            return callback(vetor[0].clientKey);
        })
    }

    public logout(){
        this.af.auth.logout();
    }

    public login(dataLogin: any) {
        this.af.auth.login(dataLogin).then(data => {
            this.router.navigate(['/']);
        }, error => {
            console.log('erro de login');
            console.log(error);
        });;
    }
}