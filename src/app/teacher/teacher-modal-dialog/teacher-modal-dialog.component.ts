import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TeacherModel } from '../core/teacher.model';
import { TeacherService } from '../core/teacher.service';

@Component({
  selector: 'cm-teacher-modal-dialog',
  templateUrl: './teacher-modal-dialog.component.html',
  styleUrls: ['./teacher-modal-dialog.component.css']
})
export class TeacherModalDialogComponent implements OnInit {

  teacherForm: FormGroup;
  teacher: TeacherModel;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<TeacherModalDialogComponent>,
    private teacherService: TeacherService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.teacher = this.data && this.data.teacher ? this.data.teacher : new TeacherModel();
  }

  ngOnInit() {
    this.createTeacherForm();
    this.title = this.teacher.id ? 'Edit Teacher' : 'Add New Teacher';
  }

  submit() {
    if (this.teacher.id == null) {
      if (this.teacherForm.invalid) {
        return;
      }
      this.teacherService.createTeacher(this.teacherForm.value).subscribe(response => {
        if (response) {
          this.dialogRef.close({success: true});
        } });
    } else {
     if (this.teacherForm.invalid) {
        return;
      }
     this.teacherService.updateTeacher(this.teacherForm.value.id, this.teacherForm.value).subscribe(
      response => {
        if (response) {
          this.dialogRef.close({success: true});
        }});
  }
}

createTeacherForm() {
  this.teacherForm = new FormGroup({
    id: new FormControl(this.teacher.id),
    first_name: new FormControl(this.teacher.first_name, Validators.required),
    last_name: new FormControl(this.teacher.last_name, Validators.required),
    email: new FormControl(this.teacher.email),
    gender: new FormControl(this.teacher.gender),
    phone_number: new FormControl(this.teacher.phone_number, Validators.required),
    website: new FormControl(this.teacher.website),
    company: new FormControl(this.teacher.company)
  });
}
}
