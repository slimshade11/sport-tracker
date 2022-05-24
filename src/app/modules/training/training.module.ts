import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingViewComponent } from './training-view/training-view.component';
import { CurrentTrainingComponent } from './components/current-training/current-training.component';
import { NewTrainingComponent } from './components/new-training/new-training.component';
import { PastTrainingsComponent } from './components/past-trainings/past-trainings.component';



@NgModule({
  declarations: [
    TrainingViewComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TrainingModule { }
