import { NovoCallComponent } from './novo-call/novo-call.component';
import { Routes, RouterModule } from '@angular/router';

import {  CallsComponent } from './calls.component';


const routes : Routes = [
    {
        path: '',
        component: CallsComponent
    },
    {
        path:'novo',
        component:NovoCallComponent
    }
];

export const routing = RouterModule.forChild(routes);
