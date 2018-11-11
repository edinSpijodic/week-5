import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { AlertService } from '../../shared/alert/alert.service';
import { CourseModalDialogComponent } from '../course-modal-dialog/course-modal-dialog.component';
import { ConfirmModalDialogComponent } from 'src/app/shared/confirm-modal-dialog/confirm-modal-dialog.component';

@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: CourseModel[];
  title = 'Courses';

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['index', 'name', 'location', 'actions'];
  dataSource: MatTableDataSource<CourseModel>;
  // END DATA TABLE CONFIG

  constructor(
    private courseService: CourseService,
    private alert: AlertService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  addNewCourse() {
    this.dialog.open(CourseModalDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result && result.success) {
          this.alert.success('Added new course');
          this.loadCourses();
        }
      });
    }

  updateCourse(course: CourseModel) {
    this.dialog.open(CourseModalDialogComponent, {
      data: { course }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
    this.alert.info(`Update ${course.name}`);
  }

  deleteCourse(course: CourseModel) {
    this.dialog.open(ConfirmModalDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result && result.confirm) {
          this.courseService.deleteCourse(course.id).subscribe(() => {
            this.alert.warning(`Deleted ${course.name}`);
            this.loadCourses();
          });
        }});
  }

  private async loadCourses() {
   this.courseService.getAllCourses().subscribe(response => { this.courses = response;
    console.log(this.courses);
    this.setDataSource(this.courses);
   },
   err => this.alert.error('Unexpected server error')
   );

  }

  private setDataSource(courses: CourseModel[]) {
    this.dataSource = new MatTableDataSource(courses);
  }

}
