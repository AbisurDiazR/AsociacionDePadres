import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OldPwdValidators } from 'src/app/shared/old-pwd.validators';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit {
  public form1!: FormGroup; 

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form1 = this.fb.group({
      oldPwd: ['',Validators.required,OldPwdValidators.shouldBe1234],
      newPwd: ['',Validators.required],
      confirmPwd: ['',Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });
  }

  get oldPwd(){
    return this.form1.get('oldPwd');
  }

   get newPwd(){
    return this.form1.get('newPwd');
  }

   get confirmPwd(){
    return this.form1.get('confirmPwd');
  }

}
