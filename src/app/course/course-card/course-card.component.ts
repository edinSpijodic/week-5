import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CourseModel } from '../core/course.model';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: CourseModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showCourseInfo(course: CourseModel) {
    this.router.navigate([`course/${course.id}`]);
  }
}
