import { Component, EventEmitter, Output } from '@angular/core';
import { TrainingList } from '@training/constants/training';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent {
  @Output() startTraining: EventEmitter<void> = new EventEmitter<void>();
  trainingList = TrainingList;
  selectedTraining = [];

  onStartTraining(): void {
    this.startTraining.emit();
  }
}
