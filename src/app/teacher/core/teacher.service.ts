import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TeacherModel } from './teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<any> {
    return this.http.get(environment.API_URL + 'teachers');
  }
  getTeacherById(id: number): Observable<any> {
    return this.http.get(environment.API_URL + 'teachers/' + id);
  }


  createTeacher(teacher: TeacherModel) {
    return this.http.post(environment.API_URL + 'teachers', teacher);
  }

  deleteTeacher(id: number) {
    return this.http.delete(environment.API_URL + 'teachers/' + id );

  }

  updateTeacher( id: number, teacher: TeacherModel): Observable<any> {
    return this.http.put(environment.API_URL + 'teachers/' + id, teacher);
  }
}
