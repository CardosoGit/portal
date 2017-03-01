import { Component, Input } from '@angular/core';

import { SMSService } from '../sms.service';

@Component({
    selector: 'send-sms',
    templateUrl: 'send-sms.component.html'
})

export class SendSMSComponent {
    public data: any = {
        mensagem: ''
    }
    public alerts: any = [];
    @Input() clientes: any[];
    constructor(private smsServ: SMSService) { }

    public enviarMensagem() {
        let mensagens = this.filterMensagem(this.data.mensagem);
        let packFinal = this.montaPackFinal(mensagens);
        console.log(packFinal);
        this.smsServ.enviarMensagens(packFinal).then(data => {
            data.subscribe(dados => {
                console.log(dados);
                this.alerts.push({
                    type: 'info',
                    msg: `SMS enviado com sucesso`,
                    timeout: 3000
                });
            })
        }).catch(err => {
            console.log(err);
        });
    }

    private filterMensagem(mensagem: any) {
        let pack: any[];
        pack = this.clientes.map(cliente => {
            let _mensagem = this.montaMensagem(cliente, mensagem);
            return {
                to: cliente.telefone,
                msg: _mensagem,
                from: 'OMA INFORMÁTICA',
                callbackOption: 'NONE'
            }
        })
        return pack;

    }

    private montaPackFinal(mensagens: any[]) {
        let pack: any = {
            sendSmsMultiRequest: {
                aggregateId: 54,
                sendSmsRequestList: mensagens
            }
        };
        return pack;
    }

    private montaMensagem(cliente: any, mensagem: string) {
        let _nome = cliente.nome.split(' ')[0];
        return mensagem.replace('/nome/', _nome);
    }


}