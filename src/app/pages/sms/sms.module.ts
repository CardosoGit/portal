import { AlertModule } from 'ng2-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosSelecionadosComponent } from './contatos-selecionados/contatos-selecionados.component';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { ListContatosComponent } from './list-contatos/list-contatos.component';
import { SendSMSComponent } from './send-sms/send-sms.component';
import { CadClienteComponent } from './cad-cliente/cad-cliente.component';
import { SMSService } from './sms.service';
import { SMSComponent } from './sms.component';
import { smsRouting } from './sms.routing';

@NgModule({
    imports: [CommonModule, AlertModule, smsRouting, FormsModule, NgaModule],
    declarations: [SMSComponent, ListContatosComponent, CadClienteComponent,
        SendSMSComponent, ContatosSelecionadosComponent],
    providers: [SMSService]
})

export default class SMSModule {

}