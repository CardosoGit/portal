import { Component, Input, ModuleWithProviders } from '@angular/core';

import { ActiveService } from '../actives.service';

@Component({
    moduleId: "module.id",
    selector: 'detalhes-equip',
    styleUrls: ['detalhesEquip.scss'],
    templateUrl: 'detalhesEquip.html'
})

export class DetalhesEquip {

    @Input() id: any;
    @Input() data: any;
    tipoEquip: string = 'impressora';
    today:number = Date.now();
    constructor(private active: ActiveService) { }

    ngOnInit() {
        
        // this.data = this.active.getDetalhesEquip(this.id);

    }
}
