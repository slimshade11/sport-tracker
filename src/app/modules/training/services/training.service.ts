import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ExerciseState } from '@training/enums/exercise-state.enum';
import { Trainings } from '@training/enums/training-collections.enum';
import { Exercise } from '@training/interfaces/exercise.interface';
import { Subject, BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  public exerciseChanged$: Subject<Exercise | null> = new Subject<Exercise | null>();
  private fetchedExercises$: BehaviorSubject<Exercise[]> = new BehaviorSubject<
    Exercise[]
  >([]);
  private passedExercises$: BehaviorSubject<Exercise[]> = new BehaviorSubject<
    Exercise[]
  >([]);
  private currentExercise!: Exercise | null;

  constructor(private db: AngularFirestore) {}

  fetchTrainings(): Observable<Exercise[]> {
    return this.db
      .collection<Exercise>(Trainings.AVAILABLE_EXERCISES)
      .valueChanges({ idField: 'id' })
      .pipe(tap((exercises: Exercise[]) => this.fetchedExercises$.next(exercises)));
  }

  fetchFinishedTrainings(): Observable<Exercise[]> {
    return this.db
      .collection<Exercise>(Trainings.FINISHED_EXERCISES)
      .valueChanges()
      .pipe(
        tap((exercises: Exercise[]) => {
          this.passedExercises$.next(exercises);
        }),
      );
  }

  startExercise(selectedId: string): void {
    this.currentExercise = this.fetchedExercises$
      .getValue()
      .find((exercise: Exercise) => exercise.id === selectedId)!;

    this.exerciseChanged$.next({ ...this.currentExercise! });
  }

  completeExercise(): void {
    const newExercise: Exercise = {
      ...this.currentExercise!,
      date: new Date(),
      state: ExerciseState.COMPLETED,
    };

    this.addDataToDataBase(newExercise);

    this.currentExercise = null;
    this.exerciseChanged$.next(null);
  }

  cancelExercise(progress: number): void {
    const newExercise: Exercise = {
      ...this.currentExercise!,
      duration: this.currentExercise!.duration * (progress / 100),
      calories: this.currentExercise!.calories * (progress / 100),
      date: new Date(),
      state: ExerciseState.CANCELLED,
    };

    this.addDataToDataBase(newExercise);

    this.currentExercise = null;
    this.exerciseChanged$.next(null);
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

  getPastExercises$(): Observable<Exercise[]> {
    return this.passedExercises$.asObservable();
  }

  getFetchedExercises$(): Observable<Exercise[] | null> {
    return this.fetchedExercises$.asObservable();
  }

  private addDataToDataBase(exercise: Exercise): void {
    this.db.collection(Trainings.FINISHED_EXERCISES).add(exercise);
  }
}
