import { Component, OnInit } from '@angular/core';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { Exercise } from '@training/interfaces/exercise.interface';
import { TrainingService } from '@training/services/training.service';
import { tap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-training-view',
  templateUrl: './training-view.component.html',
  styleUrls: ['./training-view.component.scss'],
})
export class TrainingViewComponent extends DestroyComponent implements OnInit {
  ongoingTraining = false;

  constructor(private trainingService: TrainingService) {
    super();
  }

  ngOnInit(): void {
    this.trainingService.exerciseChanged$
      .pipe(
        tap((exercise: Exercise | null) => {
          if (exercise) {
            this.ongoingTraining = true;
          } else {
            this.ongoingTraining = false;
          }
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }
}
