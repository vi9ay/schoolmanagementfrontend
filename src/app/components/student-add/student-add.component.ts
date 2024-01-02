import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  constructor(private studentService:StudentService)
  {

  }

  processAddStudentForm(student:any)
  {
    console.log(student.value);
    this.studentService.addStudent(student.value).subscribe(
      (response)=>{
        console.log(response);
        alert('Student added!')
      },
      (error)=>{
        alert('Error in saving student record!')
        console.log(error.error.name);
      }
    );
  }
}
