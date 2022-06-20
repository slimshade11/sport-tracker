import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { NewTrainingFormService } from '@training/services/new-training-form.service';
import { TrainingService } from '@training/services/training.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { tap, takeUntil, Observable, filter } from 'rxjs';
import { Exercise } from '@training/interfaces/exercise.interface';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent extends DestroyComponent implements OnInit {
  form!: UntypedFormGroup;
  trainingList!: Exercise[] | null;

  constructor(
    private trainingService: TrainingService,
    private newTrainingFormService: NewTrainingFormService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.fetchTrainings().pipe(takeUntil(this.destroy$)).subscribe();
    this.buildForm();
    this.trainingService.exercisesChanged$
      .pipe(
        tap((exercises: Exercise[] | null) => {
          this.trainingList = exercises;
        }),
      )
      .subscribe();
  }

  buildForm(): void {
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

  fetchTrainings(): Observable<Exercise[]> {
    return this.trainingService.fetchTrainings();
  }

  onStartTraining(): void {
    this.trainingService.startExercise(this.form.value.exercise);
  }
}
