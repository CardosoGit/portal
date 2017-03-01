import { NgModule } from '@angular/core';

import { SearchClientComponent } from './serch-client/search-client.component';
import { AdminChamadosComponent } from './admin-chamados.component';
import { AlertModule, DatepickerModule, ModalModule, RatingModule, TimepickerModule } from 'ng2-bootstrap';
import { NgaModule } from '../../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routing } from './admin-chamados.routing';
import { NovoChamadoComponent } from './novo-chamado/novo-chamado.component';
import { ListChamadoComponent } from './list-chamados/list-chamado.component';

@NgModule({
    imports: [routing, CommonModule, FormsModule, NgaModule, RatingModule,
        ModalModule, AlertModule, DatepickerModule, TimepickerModule],
    declarations: [ListChamadoComponent, NovoChamadoComponent, AdminChamadosComponent, SearchClientComponent]
})

export default class AdminChamadosModule {

}