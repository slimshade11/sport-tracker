import { Component, OnInit } from '@angular/core';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { Exercise } from '@training/interfaces/exercise.interface';
import { TrainingService } from '@training/services/training.service';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss'],
})
export class PastTrainingsComponent extends DestroyComponent implements OnInit {
  passedExercises$: Observable<Exercise[]> = this.trainignService.getPastExercises$();

  constructor(private trainignService: TrainingService) {
    super();
  }

  ngOnInit(): void {
    this.trainignService.fetchFinishedTrainings().pipe(takeUntil(this.destroy$)).subscribe();
  }
}
