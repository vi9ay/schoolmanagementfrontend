import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sampleform:any;

  constructor(private service:LoginService, private router:Router){}

  ngOnInit(): void {

    this.sampleform=new FormGroup({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required]),
    } );
  }

  handleFormData(){
    console.log(this.sampleform.value);
    this.service.login(this.sampleform.value.email, this.sampleform.value.password).subscribe(
      response => {
        alert('Succesfully Logged in!');
        this.router.navigate(['/studentlist']);
      }
    )
  }

}
