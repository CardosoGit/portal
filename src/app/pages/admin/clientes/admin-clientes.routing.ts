import { RouterModule, Routes } from '@angular/router';

import { ListClientesComponent } from './list-cliente/list-clientes.component';
import { AdminClientesComponent } from './admin-clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { NovoEquipComponent } from './equipamentos/novo-equip/novo-equip.component';
import { ListEquipComponent } from './equipamentos/list-equip/list-equip.component';

const routes: Routes = [
    {
        path: '',
        component: AdminClientesComponent,
        children: [
            { path: '', component: ListClientesComponent },
            {
                path: 'novo',
                component: NovoClienteComponent
            },
            {
                path: 'alterar/:id',
                component: NovoClienteComponent
            },
            {
                path: ':id/equipamentos',
                component: ListEquipComponent
            },
            {
                path: ':id/equipamentos/novo',
                component: NovoEquipComponent
            },
            {
                path: ':id/equipamentos/:idequip/alterar',
                component: NovoEquipComponent
            }
        ]
    }
];


export const routing = RouterModule.forChild(routes);