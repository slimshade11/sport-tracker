import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingViewComponent } from '@training/training-view/training-view.component';
import { CurrentTrainingComponent } from '@training/components/current-training/current-training.component';
import { NewTrainingComponent } from '@training/components/new-training/new-training.component';
import { PastTrainingsComponent } from '@training/components/past-trainings/past-trainings.component';
import { TrainingRoutingModule } from '@training/training-routing.module';
import { ComponentsModule } from '@components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrainingViewComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
  ],
  imports: [CommonModule, TrainingRoutingModule, ComponentsModule, FormsModule],
})
export class TrainingModule {}
