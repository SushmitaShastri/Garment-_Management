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
  errorTrue= false;
  errorMsg: any;
  cdata: any;
  vdata: any;
  pdata: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.addOrderGroup.controls; }
  ngOnInit(): void {
    this.buildForm();
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
    this.addOrderGroup = this.form.group({
      pname: ['', [Validators.required]],
      vname:['',[Validators.required]],
      date:['',[Validators.required]],
      qty:['',[Validators.required]],
      damage:['',[Validators.required]],
      cname:['',[Validators.required]],
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
        this._service.addOrder(orderFormData).subscribe(
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
