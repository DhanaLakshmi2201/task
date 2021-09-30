import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          password: ['', [Validators.required]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
  }
  submit()
  {
var getpassword=(<HTMLInputElement>document.getElementById("password")).value;
var getcpassword=(<HTMLInputElement>document.getElementById("cpassword")).value;
if(getpassword != getcpassword)
{   alert("Password doesnt match.");
return false;
}
alert(" matched!");
return true;
}
sh()
{
  var showp =<HTMLInputElement>document.getElementById("password");
  var showcp =<HTMLInputElement>document.getElementById("cpassword");
  if (showp.type === "password" && showcp.type === "password") {
    showp.type = "text";
    showcp.type = "text";

  } else {
    showp.type = "password";
    showcp.type = "password";
  }
}
}
function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

