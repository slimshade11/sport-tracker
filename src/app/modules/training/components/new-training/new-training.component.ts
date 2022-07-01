import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { NewTrainingFormService } from '@training/services/new-training-form.service';
import { TrainingService } from '@training/services/training.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { tap, takeUntil, Observable } from 'rxjs';
import { Exercise } from '@training/interfaces/exercise.interface';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent extends DestroyComponent implements OnInit {
  form!: UntypedFormGroup;
  trainingList$: Observable<Exercise[] | null> = this.trainingService.getFetchedExercises$();

  constructor(private trainingService: TrainingService, private newTrainingFormService: NewTrainingFormService) {
    super();
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  onStartTraining(): void {
    this.trainingService.startExercise(this.form.value.exercise);
  }

  initializeValues(): void {
    this.trainingService.fetchTrainings().pipe(takeUntil(this.destroy$)).subscribe();
    this.buildForm();
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
}
