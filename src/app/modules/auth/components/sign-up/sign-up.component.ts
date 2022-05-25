import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignUpFormService } from '@auth/services/sign-up-form.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent extends DestroyComponent implements OnInit {
  form!: FormGroup;
  isAgree: boolean = false;

  constructor(private signUpFormService: SignUpFormService) {
    super();
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.signUpFormService.buildForm();
    this.signUpFormService
      .form$()
      .pipe(
        tap((form) => (this.form = form)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  // TODO: Finish handling checkbox button

  isAgreement(): void {
    this.isAgree = !this.isAgree;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
