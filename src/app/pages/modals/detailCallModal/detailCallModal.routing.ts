import { Routes, RouterModule } from '@angular/router';

import { DetailCallModal } from './detailCallModal.component';

const routes: Routes = [
    {
        path: '',
        component: DetailCallModal
    }
]
export const routing = RouterModule.forChild(routes);