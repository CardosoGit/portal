import { Component, Input } from '@angular/core';


@Component({
    
    selector: 'item-active',
    styleUrls: ['item-active.css'],
    templateUrl: 'item-active.html'
})

export class ItemActive {
    @Input() data: any;

    statusShowDetalhes: boolean = false;
    statusShowHistory: boolean = false;
    constructor() {

    }
    showDetalhes() {
        this.statusShowDetalhes = !this.statusShowDetalhes;
        this.statusShowHistory = false;
    }
    showHistory() {
        this.statusShowDetalhes = false;
        this.statusShowHistory = !this.statusShowHistory;
    }
}