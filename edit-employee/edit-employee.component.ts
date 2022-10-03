import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeGroup: any;
  errorTrue= false;
  errorMsg: any
  edata: any;
  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.editEmployeeGroup.controls; }

  ngOnInit(): void {
    this.buildForm();
    this.edata = this._service.employeeData;
    this.editEmployeeGroup.get('name').setValue(this.edata.name);
    this.editEmployeeGroup.get('contact').setValue(this.edata.contact);
    this.editEmployeeGroup.get('address').setValue(this.edata.address);
    this.editEmployeeGroup.get('role').setValue(this.edata.role);
  }
  buildForm()
  {
    this.editEmployeeGroup = this.form.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      address:['', [Validators.required]],
      role:['', [Validators.required]],
    });
  }

  updateEmployee()
  {
    if(this.editEmployeeGroup.invalid)
    {
        for (const control of Object.keys(this.editEmployeeGroup.controls)) {
          this.editEmployeeGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const employeeFormData = this.editEmployeeGroup.value;
        employeeFormData.eid = this.edata.wid;
        console.log(employeeFormData);
        this._service.editEmployee(employeeFormData).subscribe(
          (data)=>
          {
            console.log(data);
            this.router.navigateByUrl('/employee');
          }
        );
    }
  }
}
