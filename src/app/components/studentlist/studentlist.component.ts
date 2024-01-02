import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{

  students:any[] = [];
  constructor(private studentService:StudentService)
  {

  }
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (response)=>{
        this.students=response;
        console.log(response);
      }
    );
  }
  delete(id:any)
  {
    this.studentService.deleteStudent(id).subscribe(
      (response)=>{
        alert("Student Record Deleted!");
        this.ngOnInit();
      }
    );
  }

  student:any;
  view(id:any)
  {
    this.studentService.viewStudent(id).subscribe(
      (response)=>{
        response;
      }
    );
  }
}
