import { Component, Input } from '@angular/core';

@Component({

    selector: 'history-active',
    templateUrl: 'history-active.html',
    styleUrls: ['history-active.scss']

})

export class HistoryActive {
    @Input()data: any[];
    constructor() { }


}