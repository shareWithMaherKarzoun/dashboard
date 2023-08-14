import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ValidatorEmail, ValidatorPassword } from 'src/app/utils/regex';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;
  private isSubmitted?: boolean;

  constructor(formBuilder: FormBuilder, private svc: UserService) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required, ValidatorEmail('email_not_valid')]],
      password: [
        '',
        [Validators.required, ValidatorPassword('passowrd_not_valid')],
      ],
    });

    console.log(this.loginForm);
  }

  reset() {
    this.loginForm.reset({});
  }

  get usernameErrors() {
    return this.isSubmitted ? this.loginForm.get('username')?.errors : null;
  }

  get passwordErrors() {
    return this.isSubmitted ? this.loginForm.get('password')?.errors : null;
  }

  login(event: unknown) {
    this.isSubmitted = true;

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.getRawValue();

      this.svc
        .login({
          email: username,
          password: password,
        })
        .subscribe((result) => {
          if (result.success) {
            // redirect to dashboard
            location.reload()
          } else {
            // show errors
          }
        });
    }
  }
}
