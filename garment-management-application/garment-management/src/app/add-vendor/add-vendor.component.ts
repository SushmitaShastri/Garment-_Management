import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  addVendorGroup: any;
  errorTrue= false;
  errorMsg: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.addVendorGroup.controls; }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm()
  {
    this.addVendorGroup = this.form.group({
      name: ['', [Validators.required]],
      phone: ['',[Validators.required]],
      address:['',[Validators.required]]
    });
  }
  addVendor()
  {
    if(this.addVendorGroup.invalid)
    {
        for (const control of Object.keys(this.addVendorGroup.controls)) {
          this.addVendorGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const vendorFormData = this.addVendorGroup.value;
        console.log(vendorFormData);
        this._service.addVendor(vendorFormData).subscribe(
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
              this.router.navigateByUrl('/vendor');
            }
          }
        );
    }
  }
}
