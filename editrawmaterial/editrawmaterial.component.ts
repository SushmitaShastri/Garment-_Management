import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-editrawmaterial',
  templateUrl: './editrawmaterial.component.html',
  styleUrls: ['./editrawmaterial.component.css']
})
export class EditrawmaterialComponent implements OnInit {
  rdata: any;
  editRawMaterialGroup: any;
  editRawMaterialData: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.editRawMaterialGroup.controls; }
  ngOnInit(): void {
    this.buildForm();
    this.rdata = this._service.rawMaterialData;
    console.log(this.rdata);
    this.editRawMaterialGroup.get('type').setValue(this.rdata.type);
    this.editRawMaterialGroup.get('name').setValue(this.rdata.name);
    this.editRawMaterialGroup.get('size').setValue(this.rdata.size);
    this.editRawMaterialGroup.get('quantity').setValue(this.rdata.quantity);
    this.editRawMaterialGroup.get('available').setValue(this.rdata.available);
  }
  buildForm()
  {
      this.editRawMaterialGroup = this.form.group({
      type: ['', [Validators.required]],
      name: ['',[Validators.required]],
      size:['',[Validators.required]],
      quantity:['',[Validators.required]],
      available:['',[Validators.required]]
    });
  }
  updateRawMaterial()
  {
    if(this.editRawMaterialGroup.invalid)
    {
        for (const control of Object.keys(this.editRawMaterialGroup.controls)) {
          this.editRawMaterialGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const rawMaterialFormData = this.editRawMaterialGroup.value;
        rawMaterialFormData.rid = this.rdata.rid;
        console.log(rawMaterialFormData);
        this._service.editRawMaterial(rawMaterialFormData).subscribe(
          (data)=>
          {
            console.log(data);
            this.router.navigateByUrl('/rawmaterial');
          }
        );
    }
  }


}
