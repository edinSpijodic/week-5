import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../course/core/course.model';
import { CourseService } from '../course/core/course.service';

@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: CourseModel[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(result => this.courses = result);
  }

  courseTitleSelected(x) {
    console.log('Emitter info from child component', x);
  }

}
