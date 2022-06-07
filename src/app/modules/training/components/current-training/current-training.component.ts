import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CancelTrainingDialogComponent } from '../cancel-training-dialog/cancel-training-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
  @Output() exitTraining: EventEmitter<void> = new EventEmitter<void>();
  trainingInterval!: ReturnType<typeof setTimeout>;
  progress = 0;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.interval();
  }

  interval(): void {
    this.trainingInterval = setInterval(() => {
      this.progress += 5;

      if (this.progress >= 100) {
        clearInterval(this.trainingInterval);
      }
    }, 1000);
  }

  onStopTraining(): void {
    clearInterval(this.trainingInterval);
    const dialogRef = this.dialogService.open(CancelTrainingDialogComponent, {
      header: 'Are you sure?',
      style: { width: '90%', maxWidth: '400px' },
      data: { progress: this.progress },
    });

    dialogRef.onClose.subscribe((isEnd) => {
      if (isEnd) {
        this.exitTraining.emit(isEnd);
      } else {
        this.interval();
      }
    });
  }
}
