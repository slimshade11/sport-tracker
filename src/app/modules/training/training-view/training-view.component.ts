import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-view',
  templateUrl: './training-view.component.html',
  styleUrls: ['./training-view.component.scss'],
})
export class TrainingViewComponent {
  ongoingTraining = false;

  startTraining(): void {
    this.ongoingTraining = true;
  }
}
