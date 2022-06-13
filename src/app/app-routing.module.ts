import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth/auth.module';
import { TrainingModule } from '@training/training.module';
import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> =>
      import('@auth/auth.module').then(({ AuthModule }): AuthModule => AuthModule),
  },
  {
    path: 'training',
    canActivate: [AuthGuard],
    loadChildren: (): Promise<any> =>
      import('@training/training.module').then(
        ({ TrainingModule }): TrainingModule => TrainingModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
