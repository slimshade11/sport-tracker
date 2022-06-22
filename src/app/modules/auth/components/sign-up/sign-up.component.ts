import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { SignUpFormService } from '@auth/services/sign-up-form.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent extends DestroyComponent implements OnInit {
  form!: UntypedFormGroup;
  maxDate!: Date;

  constructor(
    private signUpFormService: SignUpFormService,
    private authService: AuthService,
  ) {
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

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(): void {
    this.authService.registerUser(this.form.value);
  }
}
