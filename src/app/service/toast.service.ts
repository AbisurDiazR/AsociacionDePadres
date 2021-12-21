import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private _toastr: ToastrService
  ) { }

  public showSuccess(title: any, message: any){
    this._toastr.success(`${message}`,`${title}`);
  }

  public showError(title: any, message: any){
    this._toastr.error(`${message}`,`${title}`);
  }
}
