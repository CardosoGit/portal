import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
    selector: 'filter-contato',
    templateUrl: 'filter-contato.component.html'
})
export class FilterContatoComponent {
    typedName: string;
    @Input() contatos: any[] = [];
    listOfContatos: any[] = [];
    @Input() modelContatos: any[];
    @Output() modelContatosChange: any = new EventEmitter();

    constructor() { }

    ngAfterViewInit() {
        let loader = setInterval(() => {
            if (this.contatos.length > 0) {
                this.modelContatos = this.contatos;
                this.modelContatosChange.emit(this.contatos);
                clearInterval(loader);
            }
        }, 1000);

    }

    keyUp() {
        if (this.typedName != '')
            this.listOfContatos = this.contatos.filter((value, index) => {
                return value.nome.toLowerCase().indexOf(this.typedName.toLowerCase()) > -1 ||
                    value.telefone.toLowerCase().indexOf(this.typedName.toLowerCase()) > -1;
            });
        else
            this.listOfContatos = this.contatos;
        this.modelContatos = this.listOfContatos;
        this.modelContatosChange.emit(this.listOfContatos);
    }


}