import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-addrawmaterial',
  templateUrl: './addrawmaterial.component.html',
  styleUrls: ['./addrawmaterial.component.css']
})
export class AddrawmaterialComponent implements OnInit {

  addRawMaterialWork: any;
  errorTrue= false;
  errorMsg: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.addRawMaterialWork.controls; }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm()
  {
    this.addRawMaterialWork = this.form.group({
      type: ['', [Validators.required]],
      name: ['',[Validators.required]],
      size:['',[Validators.required]],
      quantity:['',[Validators.required]],
      available:['',[Validators.required]]
    });
  }
  addRawMaterial()
  {
    if(this.addRawMaterialWork.invalid)
    {
        for (const control of Object.keys(this.addRawMaterialWork.controls)) {
          this.addRawMaterialWork.controls[control].markAsTouched();
        }
    }
    else
    {
        const rawMaterialData = this.addRawMaterialWork.value;
        console.log(rawMaterialData);
        this._service.addRawMaterial(rawMaterialData).subscribe(
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
              this.router.navigateByUrl('/rawmaterial');
            }
          }
        );
    }
  }
}
