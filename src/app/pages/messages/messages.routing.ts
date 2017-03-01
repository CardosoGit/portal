import { Routes, RouterModule } from '@angular/router';

import { NovoContatoComponent } from './contatos/novo/novo-contato.component';
import { ListaContatosComponent } from './contatos/lista/lista-contatos.component';
import { EnviarSMSComponent } from './enviar-sms/enviar-sms.component';
import { ContatosComponent } from './contatos/contatos.component';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
    {
        path: '',
        component: MessagesComponent,
        children: [
            {
                path: 'contatos',
                component: ContatosComponent,
                children:[
                    {
                        path:'lista',
                        component: ListaContatosComponent
                    },
                    {
                        path:'novo',
                        component: NovoContatoComponent
                    }
                ]
            },
            {
                path: 'enviar-sms',
                component: EnviarSMSComponent
            }
        ]
    }
];

export const routingMessages = RouterModule.forChild(routes);