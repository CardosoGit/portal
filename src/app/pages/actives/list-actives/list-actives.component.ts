import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

import { ActiveService } from '../actives.service';

@Component({
   
    selector: 'list-actives',
    templateUrl: 'list-actives.html',
    styleUrls: ['list-actives.css']
})

export class ListActives {

    data: any;
    constructor(private actServ: ActiveService) { }

    ngOnInit() {
        this.data = this.actServ.getAllActives();
    }
}