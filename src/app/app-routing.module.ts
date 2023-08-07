import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnsureAuthenticatedService } from './services/_guards/ensure-authenticated.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module')
      .then(m => m.ForgotPasswordModule)
  },

  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module')
      .then(m => m.ResetPasswordModule)
  },

  {
    path: '',
    loadChildren:()=>import('./modules/master.module').then(m=>m.MasterModule),
    canActivate: [EnsureAuthenticatedService]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
