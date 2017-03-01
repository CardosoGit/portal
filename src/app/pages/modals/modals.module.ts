import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { DetailCallModal } from './detailCallModal/detailCallModal.component';
import { DetailCallModalService } from './detailCallModal/detailCallModal.service';
import { routing } from './detailCallModal/detailCallModal.routing';

NgModule({
    imports:[routing],
    declarations: [DetailCallModal ],
    providers: [DetailCallModalService]

})

export  class ModalsModule { }