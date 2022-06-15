import { ExerciseState } from '@training/enums/exercise-state.enum';

export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: ExerciseState.COMPLETED | ExerciseState.CANCELLED | null;
  groupName: string;
}
