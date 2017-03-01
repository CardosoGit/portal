import { Component, Input } from '@angular/core';

import { ActiveService } from '../actives.service';
import { BaThemeSpinner } from '../../../theme/services/baThemeSpinner';
@Component({
    selector: 'list-history',
    templateUrl: 'list-history.html',
    styleUrls: ['list-history.scss']

})

export class ListHistoryComponent {
    list: any[] = [];
    @Input() id: string;
    constructor(private activeSer: ActiveService, private _spinner: BaThemeSpinner) { }

    ngOnInit() {
        this._spinner.show();
        console.log(this.id);
        this.activeSer.getHistoricoEquip(this.id, data => {
            this.list = data;
            this._spinner.hide();
        });
    }

}