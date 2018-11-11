import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cm-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: CourseModel;
  courseDetailForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.getCourse(id);
  }

  private getCourse(id: number) {
    this.courseService.getCourseById(id).subscribe(response => {
    this.course = response;
    this.createCourseForm();
    });
  }

  private createCourseForm() {
    this.courseDetailForm = new FormGroup({
      name: new FormControl(this.course.name, Validators.required),
      description: new FormControl(this.course.description),
      location: new FormControl(this.course.location, Validators.required)
    });
  }
}
