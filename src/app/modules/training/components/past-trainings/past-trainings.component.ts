import { Component } from '@angular/core';
import { Exercise } from '@training/interfaces/exercise.interface';
import { TrainingService } from '@training/services/training.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss'],
})
export class PastTrainingsComponent {
  passedExercises: Observable<Exercise[]>;

  constructor(private trainignService: TrainingService) {
    this.passedExercises = this.trainignService.getPastExercises();
  }
}
