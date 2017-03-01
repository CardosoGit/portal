import { FirebaseAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()


export class AuthGuard implements CanActivate {

    constructor(private auth: FirebaseAuth, private router: Router) { }

    canActivate(): Observable<boolean> | boolean {

        return Observable.from(this.auth)
            .take(1)
            .map(state => !!state)
            .do(authenticated => {
                if (!authenticated) this.router.navigate(['/login']);
            })
    }
}