import { NgModule } from '@angular/core';

import { TagsComponent } from './contatos/novo/tags/tags.component';
import { FilterContatoComponent } from './components/filter-contato/filter-contato.component';
import { MessagesService } from './messages.service';
import { ItemListaComponent } from './contatos/lista/lista/item-lista/item-lista.component';
import { ListaComponent } from './contatos/lista/lista/lista.component';
import { NovoContatoComponent } from './contatos/novo/novo-contato.component';
import { ListaContatosComponent } from './contatos/lista/lista-contatos.component';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { EnviarSMSComponent } from './enviar-sms/enviar-sms.component';
import { ContatosComponent } from './contatos/contatos.component';
import { MessagesComponent } from './messages.component';
import { routingMessages } from './messages.routing';

@NgModule({
    declarations: [MessagesComponent, ContatosComponent, EnviarSMSComponent, MenuComponent,
        ListaContatosComponent, NovoContatoComponent, ItemListaComponent, ListaComponent,
        FilterContatoComponent, TagsComponent],
    imports: [routingMessages, CommonModule, FormsModule, NgaModule],
    providers: [ MessagesService ]
})
export default class MessagesModule {

}