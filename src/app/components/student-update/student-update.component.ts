import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  id:any;
  student:any;

  constructor(private studentService:StudentService, private activatedRoute:ActivatedRoute, private router:Router)
  {
    
  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params[('id')];
    console.log(this.id);
    this.studentService.viewStudent(this.id).subscribe(
      (response)=>{
        this.student=response;
        console.log(this.student);
      }
    );
  }
  update()
  {
    this.studentService.updateStudent(this.student,this.id).subscribe(
      (response)=>{
        alert('Student Record Updated!!');
        this.router.navigate(['/studentlist']);
      },

      (error)=>{
        alert('problem in update operation!!')
        console.log(error)
      }
      );

  }

}
