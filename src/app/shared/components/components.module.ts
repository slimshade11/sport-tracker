import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DestroyComponent } from '@components/destroy/destroy.component';

@NgModule({
  declarations: [HeaderComponent, DestroyComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
  exports: [
    HeaderComponent,
    MenubarModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ProgressSpinnerModule,
    DestroyComponent,
  ],
})
export class ComponentsModule {}
