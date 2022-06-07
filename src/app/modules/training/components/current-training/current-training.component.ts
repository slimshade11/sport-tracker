import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CancelTrainingDialogComponent } from '../cancel-training-dialog/cancel-training-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
  trainingInterval!: ReturnType<typeof setTimeout>;
  progress = 0;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.trainingInterval = setInterval(() => {
      this.progress += 5;

      if (this.progress >= 100) {
        clearInterval(this.trainingInterval);
      }
    }, 1000);
  }

  onStopTraining(): void {
    clearInterval(this.trainingInterval);
    this.dialogService.open(CancelTrainingDialogComponent, {
      header: 'Are you sure?',
      style: { width: '90%', maxWidth: '400px' },
    });
  }
}
