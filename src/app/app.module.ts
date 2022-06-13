import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ComponentsModule } from '@components/components.module';
import { MenubarModule } from 'primeng/menubar';
import { UntypedFormBuilder } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MenubarModule,
  ],
  bootstrap: [AppComponent],
  providers: [UntypedFormBuilder, AuthService, MessageService],
})
export class AppModule {}
