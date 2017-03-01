import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'clientes', loadChildren: () => System.import('./clientes/admin-clientes.module') },
            { path: 'chamados', loadChildren: () => System.import('./chamados/admin-chamados.module') }

        ]
    }
];


export const routing = RouterModule.forChild(routes);