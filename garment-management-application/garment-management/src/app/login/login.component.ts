import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: any;
  userData: any;
  messageSuccess='';
  messageError: any;
 
  constructor(public router: Router,public form: FormBuilder,private _service:RestapiService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm()
  {
    this.loginGroup = this.form.group({
     // name:['',Validators.required],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      //repassword: ['', [Validators.required]],
    });
  }
  fieldTextType!: boolean;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  get f() { return this.loginGroup.controls; }
  
  submit()
  {
    if(this.loginGroup.invalid)
    {
        for (const control of Object.keys(this.loginGroup.controls)) {
          this.loginGroup.controls[control].markAsTouched();
        }
    }
    else
    {
      this.userData = this.loginGroup.value;
      const jsonUserdata = JSON.stringify(this.userData);
      const jsonObjUser = JSON.parse(jsonUserdata);
      console.log(jsonObjUser);

    try
    {
      this._service.login(jsonObjUser).subscribe((data:any)=>{
      console.log("data "+JSON.stringify(data));
        if(data.error==true)
        {
          this.messageError=data.message["sqlMessage"];
          this.messageSuccess='';
          alert("user not found");
        }
        else
        {
          console.log("Success");
          sessionStorage.setItem("isloggedin","true");
          this.router.navigateByUrl('/dashboard');
        }
      });
      console.log("submitted");
      }
      catch(e)
      {
        console.log(e);
        this.messageSuccess="Some error occured!";

      }
    }
  }
}