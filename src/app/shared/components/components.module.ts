import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { DestroyComponent } from '@components/destroy/destroy.component';

// PrimeNg Modules
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [HeaderComponent, DestroyComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    CalendarModule,
    CheckboxModule,
    TabViewModule,
    CardModule,
    MultiSelectModule,
    ProgressBarModule,
    DynamicDialogModule,
    ToastModule,
    RadioButtonModule,
  ],
  exports: [
    HeaderComponent,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    DestroyComponent,
    CalendarModule,
    TabViewModule,
    CheckboxModule,
    CardModule,
    MultiSelectModule,
    ProgressBarModule,
    DynamicDialogModule,
    ToastModule,
    RadioButtonModule,
  ],
})
export class ComponentsModule {}
