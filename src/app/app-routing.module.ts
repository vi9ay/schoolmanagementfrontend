import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  // {path:'',component:StudentlistComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'studentlist',component:StudentlistComponent},
  {path:'addstudent',component:StudentAddComponent},
  {path:'updatestudent/:id',component:StudentUpdateComponent},
  {path:'viewstudent/:id',component:ViewStudentComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
