import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeGroup: any;
  errorTrue= false;
  errorMsg: any
  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.addEmployeeGroup.controls; }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm()
  {
    this.addEmployeeGroup = this.form.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      address:['', [Validators.required]],
      role:['', [Validators.required]],
    });
  }
  addEmployee()
  {
    if(this.addEmployeeGroup.invalid)
    {
        for (const control of Object.keys(this.addEmployeeGroup.controls)) {
          this.addEmployeeGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const employeeFormData = this.addEmployeeGroup.value;
        console.log(employeeFormData);
        this._service.addEmployee(employeeFormData).subscribe(
          (data)=>
          {
            console.log(data);
            if(data.error==true)
            {
              this.errorTrue=true;
              this.errorMsg = data.message.sqlMessage;
            }
            else
            {
              this.router.navigateByUrl('/employee');
            }
          }
        );
    }
  }

}
