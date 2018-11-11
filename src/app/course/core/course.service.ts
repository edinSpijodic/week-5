import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CourseModel } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get(environment.API_URL + 'courses');
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get(environment.API_URL + 'courses/' + id);
  }

  createCourse(course: CourseModel) {
    return this.http.post(environment.API_URL + 'courses', course);
  }

  deleteCourse(id: number) {
    return this.http.delete(environment.API_URL + 'courses/' + id );

  }

}
