import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DetalhesEquip } from './detalhesEquip/detalhesEquip.component';
import { ActiveService } from './actives.service';
import { ItemActive } from './item-active/item-active.component';
import { HistoryActive } from './history-active/history-active.component';
import { ListActives } from './list-actives/list-actives.component';
import { routing } from './equipamentos.routing';
import { Equipamentos } from './equipamentos.component';
import { ListHistoryComponent } from './list-history/list-history.component';
import { RatingModule } from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule, routing, RatingModule],
    declarations: [DetalhesEquip, ItemActive, HistoryActive, ListActives, Equipamentos, ListHistoryComponent],
    providers: [ActiveService],
    exports: [HistoryActive]
})

export default class ActiveModule {

}