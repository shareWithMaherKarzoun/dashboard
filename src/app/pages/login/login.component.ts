import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorEmail, ValidatorPassword } from 'src/app/utils/regex';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required, ValidatorEmail]],
      password: ['', [Validators.required, ValidatorPassword]]
    })
  }

  reset() {
    this.loginForm.reset({})
  }

  login() {
    if (this.loginForm.valid) {

    }

  }
}
