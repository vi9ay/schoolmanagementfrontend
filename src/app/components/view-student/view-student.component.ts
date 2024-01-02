import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{
  id:any;
  student:any;
  constructor(private studentService:StudentService, private activatedRoute:ActivatedRoute)
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
}
