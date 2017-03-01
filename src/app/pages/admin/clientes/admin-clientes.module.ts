import { NovoEquipComponent } from './equipamentos/novo-equip/novo-equip.component';
import { ListEquipComponent } from './equipamentos/list-equip/list-equip.component';
import { AlertModule, ModalModule } from 'ng2-bootstrap';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { routing } from './admin-clientes.routing';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { AdminClientesComponent } from './admin-clientes.component';
import { ListClientesComponent } from './list-cliente/list-clientes.component';

@NgModule({
    imports: [routing, CommonModule, FormsModule, NgaModule, ModalModule, AlertModule],
    declarations: [AdminClientesComponent, NovoClienteComponent,
         ListClientesComponent, ListEquipComponent, NovoEquipComponent]
})

export default class AdminClientesModule {

}