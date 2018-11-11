import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TeacherService } from '../core/teacher.service';
import { TeacherModel } from '../core/teacher.model';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { TeacherModalDialogComponent } from '../teacher-modal-dialog/teacher-modal-dialog.component';
import { ConfirmModalDialogComponent } from 'src/app/shared/confirm-modal-dialog/confirm-modal-dialog.component';

@Component({
  selector: 'cm-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: TeacherModel[];
  title = 'Teachers';

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['index', 'first_name last_name', 'email', 'gender', 'phone_number', 'website', 'company', 'actions'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private teacherService: TeacherService,
    private dialog: MatDialog,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loadTeachers();
  }
  addNewTeacher() {
    this.dialog.open(TeacherModalDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result && result.success) {
          this.alert.success('New teacher was added');
          this.loadTeachers();
        }
      });
  }

  updateTeacher(teacher: TeacherModel) {
    this.dialog.open(TeacherModalDialogComponent, {
      data: { teacher }
    }).afterClosed()
    .subscribe( response => {
      if (response && response.success) {
        this.alert.info(`Teacher ${teacher.first_name} ${teacher.last_name} was updated`);
        this.loadTeachers();
      }
    });
  }

  deleteTeacher(teacher: TeacherModel) {
    this.dialog.open(ConfirmModalDialogComponent, {
      data: {
        confirmText: `Do you want to delete ${teacher.first_name} ${teacher.last_name}`
      }
    })
      .afterClosed()
      .subscribe(result => {
        if (result && result.confirm) {
          this.teacherService.deleteTeacher(teacher.id).subscribe(() => {
            this.alert.warning(`Teacher ${teacher.first_name} ${teacher.last_name} was deleted`);
            this.loadTeachers();
          });
        }});
  }

  private async loadTeachers() {
    this.teacherService.getAllTeachers().subscribe(response => { this.teachers = response;
    console.log(this.teachers);
    this.setDataSource(this.teachers);
  });
}

  private setDataSource(teachers) {
    this.dataSource = new MatTableDataSource(teachers);
  }

}
