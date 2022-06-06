import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingViewComponent } from '@training/training-view/training-view.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
