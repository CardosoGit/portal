import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { OmaModule } from '../oma/oma.module';
import { NgaModule } from '../theme/nga.module';
//import { ModalsModule } from './modals/modals.module';

import { BasicTablesService } from './tables/components/basicTables/basicTables.service'; //charque


import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing, OmaModule],
  declarations: [Pages],
  providers: [BasicTablesService]
})
export class PagesModule {
}
