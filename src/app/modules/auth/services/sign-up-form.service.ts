import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormService } from '@services/form.service';

@Injectable({
  providedIn: 'root',
})
export class SignUpFormService extends FormService {
  constructor(protected override formBuilder: FormBuilder) {
    super(formBuilder);
  }

  get config(): any {
    return {
      username: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      birthday: ['', [Validators.required]],
      agree: ['', Validators.required],
    };
  }
}
