import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { FormService } from '@services/form.service';

@Injectable({
  providedIn: 'root',
})
export class LogInFormService extends FormService {
  constructor(protected override formBuilder: UntypedFormBuilder) {
    super(formBuilder);
  }

  get config(): any {
    return {
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    };
  }
}
