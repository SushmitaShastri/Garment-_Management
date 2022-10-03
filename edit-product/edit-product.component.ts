import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProductGroup: any;
  pdata: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.editProductGroup.controls; }
  ngOnInit(): void {
    this.buildForm();
    this.pdata = this._service.productData;
    //console.log(this.vdata);
    this.editProductGroup.get('name').setValue(this.pdata.name);
    this.editProductGroup.get('description').setValue(this.pdata.description);
    this.editProductGroup.get('size').setValue(this.pdata.size);
  }
  buildForm()
  {
    this.editProductGroup = this.form.group({
      name: ['', [Validators.required]],
      description: ['',[Validators.required]],
      size:['',[Validators.required]]
    });
  }
  updateProduct()
  {
    if(this.editProductGroup.invalid)
    {
        for (const control of Object.keys(this.editProductGroup.controls)) {
          this.editProductGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const productGroupData = this.editProductGroup.value;
        productGroupData.pid = this.pdata.pid;
        console.log(productGroupData);
        this._service.editProduct(productGroupData).subscribe(
          (data)=>
          {
            console.log(data);
            this.router.navigateByUrl('/product');
          }
        );
    }
  }
}
