import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';

export class CustomValidators{

  static forbiddenNames = ['Test'];
  static forbiddenNamesAsync = ['Default'];

  static forbiddenProjectNamesValidator(control:FormControl) : {[key:string]:boolean}{
    

    if(CustomValidators.forbiddenNames.indexOf(control.value)!==-1)
      return {'projectNameForbidden':true};
    else
      return null;
  }

  static asyncForbiddenProjectNameValidator(control:FormControl): Promise<any>|Observable<any>{
    const promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(CustomValidators.forbiddenNamesAsync.indexOf(control.value)!==-1)
          return resolve({'projectNameForbiddenAsync':true})
        else
          return resolve(null);
      }, 2000);
    });
    return promise;
  }
}
