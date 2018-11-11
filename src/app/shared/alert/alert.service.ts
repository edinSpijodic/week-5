import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(
    private toastr: ToastrService
  ) { }

  success(title) {
    this.toastr.success(title);
  }

  warning(title) {
    this.toastr.warning(title);
  }

  info(title) {
    this.toastr.info(title);
  }

  error(title) {
    this.toastr.error(title);
  }
}
