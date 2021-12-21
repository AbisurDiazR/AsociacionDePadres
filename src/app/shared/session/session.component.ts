import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ToastService } from 'src/app/service/toast.service';
import { SCHOOLAR_GRADES } from '../data';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  public newUserForm!: any;
  public userForm!: any;
  public schoolarGrades = SCHOOLAR_GRADES;
  user: any;
  userData: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _login: AuthService,
    private _toastService: ToastService
  ) { 
    this.newUserForm = this._fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.userForm = this._fb.group({
      fullName: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
      grade: new FormControl([], [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public login(){
    let email = this.newUserForm.controls['email'].value;
    let password = this.newUserForm.controls['password'].value;
    this._login.login(email, password).then((res: any) => {
      if (res.user !== undefined) {
        this._login.getUserById(res.user.uid).subscribe((usr: any) => {
          this.user = {uid: usr.id, ...usr.data()}
          localStorage.setItem('uid',this.user.uid);
          window.location.reload();
          this.userData = true;
        });
      }
    });
  }

  public register(){
    if (this.userForm.valid) {
      let email = this.userForm.controls['email'].value;
      let password = this.userForm.controls['password'].value;
      this._login.createAccount(email, password).then((res: any) => {
        let usr = res.user;
        this._login.saveUserData(this.userForm.value, usr.metadata, usr.uid);
      }).catch((reason: any) => {
        console.log(reason);
        this._toastService.showError('Error',reason);
        throw reason;
      });
    }
  }

}
