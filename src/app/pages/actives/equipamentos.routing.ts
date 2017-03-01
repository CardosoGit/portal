import { Routes, RouterModule } from '@angular/router';

import { Equipamentos } from './equipamentos.component';

const routes: Routes = [
    {
        path: '',
        component: Equipamentos
    },
];


export const routing = RouterModule.forChild(routes);