import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormComponent} from "../form/form.component";
import {InputFieldComponent} from "../UI/inputField.component";
import {HeaderComponent} from "../header/header.component";
import { TranslateboxComponent } from '../translatebox/translatebox.component';
import {ButtonComponent} from "../UI/button.component";
import {AddbtnComponent} from "../UI/addbtn.component";
import {CheckBoxComponent} from "../UI/checkBox.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputFieldComponent,
    HeaderComponent,
    TranslateboxComponent,
    ButtonComponent,
    AddbtnComponent,
    CheckBoxComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
