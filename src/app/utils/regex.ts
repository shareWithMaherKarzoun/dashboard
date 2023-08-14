import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//Required Passowrd Expression
const errorValidatorPassword = `
Require that at least one digit [0-9]
Require that at least one lowercase letter [a-z]
Require that at least one uppercase letter [A-Z]
Require that at least one special character [*.!@#$%^&(){}[]:;<>,.?/~_+-=|]
`;

export function ValidatorPassword(erorCode: string) {
  erorCode = erorCode || 'passowrd';
  return (control: AbstractControl): ValidationErrors | null => {
    let error = null;
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+-=|\\]).{8,32}$/g.test(
        control.value
      )
    ) {
      error = { [erorCode]: errorValidatorPassword };
    }
    return error;
  };
}

//Required Passowrd Expression
const errorValidatorEmail = `
Email format is invalid, For example 'user@company.com'
`;

export function ValidatorEmail(erorCode: string): ValidatorFn {
  erorCode = erorCode || 'email';
  return (control: AbstractControl): ValidationErrors | null => {
    let error = null;
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(control.value)) {
      error = { [erorCode]: errorValidatorEmail };
    }
    return error;
  };
}
