import { AbstractControl, ValidatorFn } from "@angular/forms";

export function charValidator(type:string, validatorReg: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let str = control.value;
    const res ={};
    res[type] = {str};
    const valid = validatorReg.test(str);
    return valid ? null: res;
  };
}