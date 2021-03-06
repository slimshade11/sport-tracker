import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '@auth/components/sign-up/sign-up.component';
import { LogInComponent } from '@auth/components/log-in/log-in.component';
import { AuthViewComponent } from '@auth/auth-view/auth-view.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { ComponentsModule } from '@components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignUpComponent, LogInComponent, AuthViewComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthModule {}
