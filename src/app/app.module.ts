import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentlistComponent,
    StudentAddComponent,
    ViewStudentComponent,
    StudentUpdateComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
