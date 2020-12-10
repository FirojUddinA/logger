import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../index/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../index/signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'forget-password',
        loadChildren: () => import('../index/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
      },
      {
        path: '',
        redirectTo: 'login'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
