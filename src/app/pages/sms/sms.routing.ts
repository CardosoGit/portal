import { Routes, RouterModule } from '@angular/router';

import { SMSComponent } from './sms.component';

const routes: Routes = [
    {
        path: '',
        component: SMSComponent
    }
];

export const smsRouting = RouterModule.forChild(routes);