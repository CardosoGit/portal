import { NovoChamadoComponent } from './novo-chamado/novo-chamado.component';
import { ListChamadoComponent } from './list-chamados/list-chamado.component';
import { AdminChamadosComponent } from './admin-chamados.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AdminChamadosComponent,
        children: [
            {
                path: '', component: ListChamadoComponent
            },
            {
                path: 'novo', component: NovoChamadoComponent
            },
            {
                path: 'alterar/:id',
                component: NovoChamadoComponent
            }
        
        ]
    }
]

export const routing = RouterModule.forChild(routes);