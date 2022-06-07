import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { FormService } from '@services/form.service';

@Injectable({
  providedIn: 'root',
})
export class SignUpFormService extends FormService {
  constructor(protected override formBuilder: UntypedFormBuilder) {
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
      agree: [null, [Validators.required]],
    };
  }
}
