import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorEmail, ValidatorPassword } from 'src/app/utils/regex';
import {delay, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public login: FormGroup;
  public showError ?: boolean;

  constructor(formBuilder: FormBuilder) {
    this.login = formBuilder.group({
      username: ['', [Validators.required,ValidatorEmail]],
      password: ['', [Validators.required,ValidatorPassword]]
    })
  }


  ngOnInit(): void {
    this.login.valueChanges.pipe(
      delay(500),
      debounceTime(1000)
    ).subscribe(()=> this.showError = !this.login.valid  )
  }
  
  reset(){
    this.login.reset({})
  }

  submit(){
    if(!this.login.valid){

    }
  }
}
