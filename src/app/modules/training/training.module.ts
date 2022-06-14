import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { TrainingViewComponent } from '@training/training-view/training-view.component';
import { CurrentTrainingComponent } from '@training/components/current-training/current-training.component';
import { NewTrainingComponent } from '@training/components/new-training/new-training.component';
import { PastTrainingsComponent } from '@training/components/past-trainings/past-trainings.component';
import { TrainingRoutingModule } from '@training/training-routing.module';
import { ComponentsModule } from '@components/components.module';
import { CancelTrainingDialogComponent } from '@training/components/cancel-training-dialog/cancel-training-dialog.component';

@NgModule({
  declarations: [
    TrainingViewComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    CancelTrainingDialogComponent,
  ],
  providers: [DialogService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrainingRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class TrainingModule {}
