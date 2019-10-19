import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses: Array<string> = ['Stable', 'Critical', 'Finished'];
  signupForm: FormGroup;

  constructor(){}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projName': new FormControl(null, Validators.required, this.forbiddenProjNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  nonAsyncForbiddenProjNames(control:FormControl): {[s: string]: boolean} {
    if (control.value === "Test") {
      return {'forbiddenName': true};
    }
    return null;
  }

  forbiddenProjNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({'fobiddenName': true});
        }
        resolve(null);
      }, 5000);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
  
  getState() {
    console.log(this.signupForm);
  }
}
