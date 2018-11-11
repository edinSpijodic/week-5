import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cm-confirm-modal-dialog',
  templateUrl: './confirm-modal-dialog.component.html',
  styleUrls: ['./confirm-modal-dialog.component.css']
})
export class ConfirmModalDialogComponent implements OnInit {

  confirmText = 'Are you sure?';

  constructor(
    private dialogRef: MatDialogRef<ConfirmModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    console.log('Dialog constructor', this.data);
    if (this.data && this.data.confirmText) {
      this.confirmText = this.data.confirmText;
    }
  }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close({confirm: true});
  }
}
