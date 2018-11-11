import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StudentModel } from './student.model';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get(environment.API_URL + 'students');
  }
  getStudentById(id: number): Observable<any> {
    return this.http.get(environment.API_URL + 'students/' + id);
  }


  createStudent(student: StudentModel) {
    return this.http.post(environment.API_URL + 'students', student);
  }

  deleteStudent(id: number) {
    return this.http.delete(environment.API_URL + 'students/' + id );

  }

  updateStudent( id: number, student: StudentModel): Observable<any> {
    return this.http.put(environment.API_URL + 'students/' + id, student);
  }
}
