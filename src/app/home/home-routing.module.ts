import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('../pages/activity/activity.module').then( m => m.ActivityPageModule)
      },
      {
        path: 'budget',
        loadChildren: () => import('../pages/budget/budget.module').then( m => m.BudgetPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: 'dashboard'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
