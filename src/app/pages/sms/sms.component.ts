import { Component } from '@angular/core';

@Component({
	selector: 'sms-comp',
	template: `
              <div class="row">
	<div class="col-md-6">
		<cad-cliente></cad-cliente>
		<list-contatos [(bindModelContatos)]='contatos'></list-contatos>
	</div>
	<div class="col-md-6">
		<send-sms [clientes]='contatos'></send-sms>
		<contatos-selecionados [(contatos)]='contatos' > </contatos-selecionados>
	</div>
</div>
        `
})

export class SMSComponent {
	public contatos: any[];
}