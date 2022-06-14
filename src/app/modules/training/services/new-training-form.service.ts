import { Injectable } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { FormService } from '@services/form.service';

@Injectable({
  providedIn: 'root',
})
export class NewTrainingFormService extends FormService {
  constructor(protected override formBuilder: UntypedFormBuilder) {
    super(formBuilder);
  }

  get config(): any {
    return {
      crunches: [''],
      touchToes: [''],
      burpees: [''],
    };
  }
}
