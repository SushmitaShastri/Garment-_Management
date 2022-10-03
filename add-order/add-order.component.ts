import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  addOrderGroup: any;
  errorTrue=false;
  errorMsg: any;
  productData: any;
  vendorData: any;
  catalogData: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.addOrderGroup.controls; }

  ngOnInit(): void {
    this.buildForm();
    this._service.getProductData().subscribe(
      (data:any)=>{
        console.log(data);
        this.productData = data["data"];
      }
    );
    this._service.getVendorData().subscribe(
      (data:any)=>{
        console.log(data);
        this.vendorData = data["data"];
      }
    );
    this._service.getCategoryData().subscribe(
      (data:any)=>{
        console.log(data);
        this.catalogData = data["data"];
      }
    );
  }
  buildForm()
  {
    this.addOrderGroup = this.form.group({
      productName: ['', [Validators.required]],
      vendorName: ['', [Validators.required]],
      catalogName: ['', [Validators.required]],
      date: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      damage: ['', [Validators.required]],
    });
  }
  addOrder()
  {
    if(this.addOrderGroup.invalid)
    {
        for (const control of Object.keys(this.addOrderGroup.controls)) {
          this.addOrderGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const orderFormData = this.addOrderGroup.value;
        console.log(orderFormData);
        this._service.addorder(orderFormData).subscribe(
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
              this.router.navigateByUrl('/order');
            }
          }
        );
    }
  }
}
