import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentModel } from '../core/student.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from '../core/student.service';

@Component({
  selector: 'cm-student-modal-dialog',
  templateUrl: './student-modal-dialog.component.html',
  styleUrls: ['./student-modal-dialog.component.css']
})
export class StudentModalDialogComponent implements OnInit {

  studentForm: FormGroup;
  student: StudentModel;
  title: string;


  constructor(
    public dialogRef: MatDialogRef<StudentModalDialogComponent>,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.student = this.data && this.data.student ? this.data.student : new StudentModel();
  }

  ngOnInit() {
    this.createStudentForm();
    this.title = this.student.id ? 'Edit Student' : 'Add New Student';
  }
  submit() {
    if (this.student.id == null) {
      if (this.studentForm.invalid) {
        return;
      }
      this.studentService.createStudent(this.studentForm.value).subscribe(response => {
        if (response) {
          this.dialogRef.close({success: true});
        } });
    } else {
     if (this.studentForm.invalid) {
        return;
      }
     this.studentService.updateStudent(this.studentForm.value.id, this.studentForm.value).subscribe(
      response => {
        if (response) {
          this.dialogRef.close({success: true});
        }});
  }


  }

  createStudentForm() {
    this.studentForm = new FormGroup({
      id: new FormControl(this.student.id),
      first_name: new FormControl(this.student.first_name, Validators.required),
      last_name: new FormControl(this.student.last_name, Validators.required),
      email: new FormControl(this.student.email, [Validators.email, Validators.required]),
      gender: new FormControl(this.student.gender),
      phone_number: new FormControl(this.student.phone_number)
    });

  }

}
