import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-cancel-training-dialog',
  templateUrl: './cancel-training-dialog.component.html',
  styleUrls: ['./cancel-training-dialog.component.scss'],
})
export class CancelTrainingDialogComponent {
  constructor(private dialogService: DialogService) {}
}
