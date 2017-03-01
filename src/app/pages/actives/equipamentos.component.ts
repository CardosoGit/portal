import { Component } from '@angular/core';

import { BaThemeSpinner } from '../../theme/services/baThemeSpinner';
import { ActiveService } from './actives.service';

@Component({
    selector: 'equipamentos',
    template: `<list-actives *ngIf="isMostrar"></list-actives>`
})
export class Equipamentos {
    isMostrar = false;
    constructor(private service: ActiveService, private _spinner: BaThemeSpinner) {
        if (this.service.status2 == false) {
            this._spinner.show();
            this.service.status.subscribe(data => {
                console.log(data);
                this.isMostrar = true;
                this._spinner.hide();
            });
        } else {
            this.isMostrar = true;
        }

    }
}