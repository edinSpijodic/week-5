import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel} from '../core/student.model';
import { StudentModalDialogComponent } from '../student-modal-dialog/student-modal-dialog.component';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { ConfirmModalDialogComponent } from 'src/app/shared/confirm-modal-dialog/confirm-modal-dialog.component';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];
  title = 'Students';

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['index', 'first_name last_name', 'email', 'gender', 'phone_number', 'actions'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  addNewStudent() {
    this.dialog.open(StudentModalDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result && result.success) {
          this.alert.success('New student was added');
          this.loadStudents();
        }
      });
  }

  updateStudent(student: StudentModel) {
    this.dialog.open(StudentModalDialogComponent, {
      data: { student }
    }).afterClosed()
    .subscribe( response => {
      if (response && response.success) {
        this.alert.info(`Student ${student.first_name} ${student.last_name} was updated`);
        this.loadStudents();
      }
    });
  }

  deleteStudent(student: StudentModel) {
    this.dialog.open(ConfirmModalDialogComponent, {
      data: {
        confirmText: `Do you want to delete ${student.first_name} ${student.last_name}`
      }
    })
      .afterClosed()
      .subscribe(result => {
        if (result && result.confirm) {
          this.studentService.deleteStudent(student.id).subscribe(() => {
            this.alert.warning(`Student ${student.first_name} ${student.last_name} was deleted`);
            this.loadStudents();
          });
        }});
  }

  private async loadStudents() {
    this.studentService.getAllStudents().subscribe(response => { this.students = response;
     console.log(this.students);
     this.setDataSource(this.students);
    });

  }

  private setDataSource(students: StudentModel[]) {
    this.dataSource = new MatTableDataSource(students);
  }

}
