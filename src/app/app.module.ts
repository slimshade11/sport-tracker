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
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '@environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
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
