import { OmaModule } from '../../oma/oma.module';
import { NovoCallComponent } from './novo-call/novo-call.component';
import { ModalModule, RatingModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { CallsService } from './calls.service';
import { routing } from './calls.routing';
import { CallsComponent } from './calls.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [CallsComponent, NovoCallComponent],
    imports: [routing, CommonModule, OmaModule, NgaModule, ModalModule, RatingModule],
    providers: [CallsService]

})

export default class CallsModule {

}