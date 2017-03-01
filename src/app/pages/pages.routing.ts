import { AuthGuard } from './guard/auth.guard';
import { NovoEquipComponent } from './cad-os/novo-equip/novo-equip.component';
import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'chamados', loadChildren: () => System.import('./calls/calls.module') },
      { path: 'equipamentos', loadChildren: () => System.import('./actives/actives.module') },
      { path: 'gestao-chamados', loadChildren: () => System.import('./admin/admin.module') },
      { path: 'sms', loadChildren: () => System.import('./sms/sms.module') },
      { path: 'messages', loadChildren: () => System.import('./messages/messages.module') }
    ]

    // { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
    // //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
    // { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
    // { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
    // { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
    // { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
    // { path: 'maps', loadChildren: () => System.import('./maps/maps.module') }

  }
];

export const routing = RouterModule.forChild(routes);
