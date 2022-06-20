import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HardcodedExercises } from '@training/constants/hardcodedExercises';
import { ExerciseState } from '@training/enums/exercise-state.enum';
import { Trainings } from '@training/enums/training-collections.enum';
import { Exercise } from '@training/interfaces/exercise.interface';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private passedExercises$: BehaviorSubject<Exercise[]> = new BehaviorSubject<
    Exercise[]
  >([]);
  private currentExercise!: Exercise | null;
  public exerciseChanged: Subject<Exercise | null> = new Subject<Exercise | null>();

  constructor(private db: AngularFirestore) {}

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
    const newExercise: Exercise = {
      ...this.currentExercise!,
      date: new Date(),
      state: ExerciseState.COMPLETED,
    };

    this.updateExercises(newExercise);
    this.currentExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number): void {
    const newExercise: Exercise = {
      ...this.currentExercise!,
      duration: this.currentExercise!.duration * (progress / 100),
      calories: this.currentExercise!.calories * (progress / 100),
      date: new Date(),
      state: ExerciseState.CANCELLED,
    };

    this.updateExercises(newExercise);
    this.currentExercise = null;
    this.exerciseChanged.next(null);
  }

  updateExercises(newExercise: Exercise): void {
    const updatedExercises: Exercise[] = [
      ...this.passedExercises$.getValue(),
      newExercise,
    ];

    this.passedExercises$.next(updatedExercises);
  }

  getCurrentExercise(): Exercise {
    return { ...this.currentExercise! };
  }

  getPastExercises(): Observable<Exercise[]> {
    return this.passedExercises$.asObservable();
  }

  fetchTrainings(): Observable<Exercise[]> {
    return this.db
      .collection<Exercise>(Trainings.AVAILABLE_EXERCISES)
      .valueChanges();
  }
}
