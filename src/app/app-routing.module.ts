import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth/auth.module';
import { TrainingModule } from '@training/training.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@auth/auth.module').then(({ AuthModule }): AuthModule => AuthModule),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('@training/training.module').then(
        ({ TrainingModule }): TrainingModule => TrainingModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
