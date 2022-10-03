import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductGroup: any;
  errorTrue=false;
  errorMsg: any;

  
  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.addProductGroup.controls; }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm()
  {
    this.addProductGroup = this.form.group({
      name: ['', [Validators.required]],
      description: ['',[Validators.required]],
      size:['',[Validators.required]]
    });
  }
  addProduct()
  {
    if(this.addProductGroup.invalid)
    {
        for (const control of Object.keys(this.addProductGroup.controls)) {
          this.addProductGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const productFormData = this.addProductGroup.value;
        console.log(productFormData);
        this._service.addProduct(productFormData).subscribe(
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
              this.router.navigateByUrl('/product');
            }
          }
        );
    }
  }
}
