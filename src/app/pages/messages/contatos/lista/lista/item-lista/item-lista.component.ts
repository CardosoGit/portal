import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'item-lista-contato',
    templateUrl: 'item-lista.component.html',
    styles: [`
        .item-contato{
            display:flex;
            justify-content: space-between;
        }
        button{
            border:none;
            background:none
        }
        .hoverview{
                 display:none;
                 padding:10px 10px;
                 max-width:300px;
                 max-height:200px;
        }
    `]
})
export class ItemListaComponent implements OnInit {
    @Input() contato: any;
    @ViewChild('hoverView') hoverView: ElementRef;
    constructor() { }

    mouseEnter(event) {
        jQuery(this.hoverView.nativeElement).css({
                'left': event.clientX - 0,
                'top': event.clientY - 220
            }).fadeIn("slow");
    }

    mouseLeave(contato) {
        jQuery(this.hoverView.nativeElement).fadeOut('slow');
    }

    mens_enviadas(contato) {

    }
    editar(contato) {

    }
    excluir(contato) {

    }
    ngOnInit() { }
}