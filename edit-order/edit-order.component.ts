import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  odata: any;
  editOrderGroup: any;
  editOrderData: any;
  cdata: any;
  vdata: any;
  pdata: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.editOrderGroup.controls; }
  ngOnInit(): void {
    this.buildForm();
    this.odata = this._service.orderData;
    console.log(this.odata);
    this.editOrderGroup.get('pname').setValue(this.odata.pname);
    this.editOrderGroup.get('vname').setValue(this.odata.vname);
    this.editOrderGroup.get('date').setValue(this.odata.date);
    this.editOrderGroup.get('qty').setValue(this.odata.quantity);
    this.editOrderGroup.get('damage').setValue(this.odata.damage);
    this.editOrderGroup.get('cname').setValue(this.odata.cname);
    
    this._service.getcid().subscribe(
      (data)=>{
        console.log(data);
        this.cdata=data["data"];
      }
    );
    this._service.getvid().subscribe(
      (data)=>{
        console.log(data);
        this.vdata=data["data"];
      });
     this._service.getpid().subscribe(
        (data)=>{
          console.log(data);
          this.pdata=data["data"];
        });
  }
  buildForm()
  {
    this.editOrderGroup = this.form.group({
      pname: ['', [Validators.required]],
      vname: ['',[Validators.required]],
      date:['',[Validators.required]],
      qty:['',[Validators.required]],
      damage:['',[Validators.required]],
      cname:['',[Validators.required]]
    });
  }
  updateOrder()
  {
    if(this.editOrderGroup.invalid)
    {
        for (const control of Object.keys(this.editOrderGroup.controls)) {
          this.editOrderGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const orderFormData = this.editOrderGroup.value;
        orderFormData.oid = this.odata.oid;
        console.log(orderFormData);
        this._service.editOrder(orderFormData).subscribe(
          (data)=>
          {
            console.log(data);
            this.router.navigateByUrl('/order');
          }
        );
    }
  }

}
