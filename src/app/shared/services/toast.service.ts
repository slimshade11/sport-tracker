import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  showInfoMessage(severity: string, summary: string, detail: string): void {
    this.messageService.clear();
    this.messageService.add({
      severity,
      summary,
      detail,
    });

    setTimeout(() => {
      this.messageService.clear();
    }, 7500);
  }
}
