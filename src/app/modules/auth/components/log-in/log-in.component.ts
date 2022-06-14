import { Component, OnInit } from '@angular/core';
import { LogInFormService } from '@auth/services/log-in-form.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { takeUntil, tap } from 'rxjs';
import { UntypedFormGroup } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent extends DestroyComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private logInFormService: LogInFormService,
    private authService: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.logInFormService.buildForm();
    this.logInFormService
      .form$()
      .pipe(
        tap((form: UntypedFormGroup) => (this.form = form)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  onSubmit(): void {
    const login = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.authService.login(login);
  }
}
