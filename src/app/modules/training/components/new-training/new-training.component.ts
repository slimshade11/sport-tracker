import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { NewTrainingFormService } from '@training/services/new-training-form.service';
import { TrainingService } from '@training/services/training.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { tap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent extends DestroyComponent implements OnInit {
  form!: UntypedFormGroup;
  trainingList = this.trainingService.getHardcodedTrainings();
  selectedTraining = [];

  constructor(
    private trainingService: TrainingService,
    private newTrainingFormService: NewTrainingFormService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.newTrainingFormService.buildForm();
    this.newTrainingFormService
      .form$()
      .pipe(
        tap((form: UntypedFormGroup) => {
          this.form = form;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  onStartTraining(): void {
    this.trainingService.startExercise(this.form.value.exercise);
  }
}
