import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ComponentsModule } from '@components/components.module';
import { UntypedFormBuilder } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MenubarModule,
  ],
  providers: [UntypedFormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
