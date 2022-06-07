import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class FormService {
  protected _form!: UntypedFormGroup;
  protected _form$: BehaviorSubject<UntypedFormGroup> = new BehaviorSubject<UntypedFormGroup>(
    this._form,
  );

  protected constructor(protected formBuilder: UntypedFormBuilder) {}

  abstract get config(): any;

  buildForm(): void {
    this._form = this.formBuilder.group(this.config);
    this._form$?.next(this._form);
  }

  form$(): Observable<UntypedFormGroup> {
    return this._form$.asObservable();
  }
}
