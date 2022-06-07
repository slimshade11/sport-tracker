import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-cancel-training-dialog',
  templateUrl: './cancel-training-dialog.component.html',
  styleUrls: ['./cancel-training-dialog.component.scss'],
})
export class CancelTrainingDialogComponent {
  progress = this.config.data.progress;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef) {}

  onDialogButtonClick(val: boolean): void {
    this.ref.close(val);
  }
}
