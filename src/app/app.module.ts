import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentGetComponent } from './student-get/student-get.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentGetComponent,
    StudentEditComponent
  ],
  imports: [
	FormsModule,
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }