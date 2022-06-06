import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LogInFormService } from '@auth/services/log-in-form.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent extends DestroyComponent implements OnInit {
  form!: FormGroup;

  constructor(private logInFormService: LogInFormService) {
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
        tap((form: FormGroup) => (this.form = form)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  navigateToLoginPage(): void {}

  onSubmit(): void {
    console.log(this.form.value);
  }
}
