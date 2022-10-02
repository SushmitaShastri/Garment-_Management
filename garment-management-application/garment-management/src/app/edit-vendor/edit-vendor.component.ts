import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
  vdata: any;
  editVendorGroup: any;
  editVendorData: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.editVendorGroup.controls; }
  ngOnInit(): void {
    this.buildForm();
    this.vdata = this._service.vendorData;
    //console.log(this.vdata);
    this.editVendorGroup.get('name').setValue(this.vdata.name);
    this.editVendorGroup.get('phone').setValue(this.vdata.phone);
    this.editVendorGroup.get('address').setValue(this.vdata.address);
  }
  buildForm()
  {
    this.editVendorGroup = this.form.group({
      name: ['', [Validators.required]],
      phone: ['',[Validators.required]],
      address:['',[Validators.required]]
    });
  }
  updateVendor()
  {
    if(this.editVendorGroup.invalid)
    {
        for (const control of Object.keys(this.editVendorGroup.controls)) {
          this.editVendorGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const vendorFormData = this.editVendorGroup.value;
        vendorFormData.vid = this.vdata.vid;
        console.log(vendorFormData);
        this._service.editVendor(vendorFormData).subscribe(
          (data)=>
          {
            console.log(data);
            this.router.navigateByUrl('/vendor');
          }
        );
    }
  }
}
