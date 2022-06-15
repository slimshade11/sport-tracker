import { Injectable } from '@angular/core';
import { HardcodedExercises } from '@training/constants/hardcodedExercises';
import { ExerciseState } from '@training/enums/exercise-state.enum';
import { Exercise } from '@training/interfaces/exercise.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private exercises: Exercise[] = [];
  private currentExercise!: Exercise | null;
  public exerciseChanged: Subject<Exercise | null> = new Subject<Exercise | null>();

  getHardcodedTrainings(): Exercise[] {
    return HardcodedExercises.slice();
  }

  startExercise(selectedId: string): void {
    this.currentExercise = HardcodedExercises.find(
      (exercise: Exercise) => exercise.id === selectedId,
    )!;

    this.exerciseChanged.next({ ...this.currentExercise! });
  }

  completeExercise(): void {
    this.exercises.push({
      ...this.currentExercise!,
      date: new Date(),
      state: ExerciseState.COMPLETED,
    });
    this.currentExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.currentExercise!,
      duration: this.currentExercise!.duration * (progress / 100),
      calories: this.currentExercise!.duration * (progress / 100),
      date: new Date(),
      state: ExerciseState.CANCELLED,
    });
    this.currentExercise = null;
    this.exerciseChanged.next(null);
  }

  getCurrentExercise(): Exercise {
    return { ...this.currentExercise! };
  }
}
