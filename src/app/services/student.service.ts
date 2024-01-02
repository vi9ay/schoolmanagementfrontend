import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl="http://localhost:8080/app/";
  constructor(private http:HttpClient) { }

  getAllStudents():Observable<any>
  {
    return this.http.get(this.baseUrl+'students');
  }

  addStudent(obj:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);

    return this.http.post(this.baseUrl+'student', body,{'headers':headers});
  }

  deleteStudent(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+"student/"+id);
  }

  updateStudent(obj:any, id:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    return this.http.patch(this.baseUrl+"student/"+id,body,{'headers':headers});
  }

  viewStudent(id:any):Observable<any>
  {
    return this.http.get(this.baseUrl+"student/"+id);
  }
}

