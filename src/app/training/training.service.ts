import { Excercise } from './excercise.model';
import { Subject } from 'rxjs';

export class TrainingService {
  exerciseChanged = new Subject<Excercise>();

  private availableExcercises: Excercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 190 },
    { id: 'burpees', name: 'Burpees', duration: 80, calories: 180 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 900 }
  ];

  private runningExercise: Excercise;

  getAvailableExercises() {
    return [...this.availableExcercises];
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExcercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }
}
