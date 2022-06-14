import { Injectable } from '@angular/core';
import { HardcodedExercises } from '@training/constants/hardcodedExercises';
import { Exercise } from '@training/interfaces/exercise.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private currentExercise: Exercise | undefined;
  public exerciseChanged: Subject<Exercise | undefined> = new Subject<
    Exercise | undefined
  >();

  getHardcodedTrainings(): Exercise[] {
    return HardcodedExercises.slice();
  }

  startExercise(selectedId: string) {
    this.currentExercise = HardcodedExercises.find(
      (exercise: Exercise) => exercise.id === selectedId,
    );

    this.exerciseChanged.next({ ...this.currentExercise! });
  }
}
