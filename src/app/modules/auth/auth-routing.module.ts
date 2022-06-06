import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '@auth/components/sign-up/sign-up.component';
import { LogInComponent } from '@auth/components/log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-up',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
