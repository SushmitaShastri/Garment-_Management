import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-editdistributework',
  templateUrl: './editdistributework.component.html',
  styleUrls: ['./editdistributework.component.css']
})
export class EditdistributeworkComponent implements OnInit {
  ddata: any;
  editDistributeGroup: any;
  editDistributeData: any;

  constructor(private _service:RestapiService,public form: FormBuilder,private router:Router) { }
  get f() { return this.editDistributeGroup.controls; }
  ngOnInit(): void {
    this.buildForm();
    this.ddata = this._service.distributeData;
    console.log(this.ddata);
    this.editDistributeGroup.get('date').setValue(this.ddata.date);
    this.editDistributeGroup.get('status').setValue(this.ddata.status);
    this.editDistributeGroup.get('quantity').setValue(this.ddata.quantity);
    this.editDistributeGroup.get('damage').setValue(this.ddata.damage);
  }
  buildForm()
  {
    this.editDistributeGroup = this.form.group({
      date: ['', [Validators.required]],
      status: ['',[Validators.required]],
      quantity:['',[Validators.required]],
      damage:['',[Validators.required]]
    });
  }
  updateDistribute()
  {
    if(this.editDistributeGroup.invalid)
    {
        for (const control of Object.keys(this.editDistributeGroup.controls)) {
          this.editDistributeGroup.controls[control].markAsTouched();
        }
    }
    else
    {
        const distributeFormData = this.editDistributeGroup.value;
        distributeFormData.assignid = this.ddata.assignid;
        console.log(distributeFormData);
        this._service.editDistribute(distributeFormData).subscribe(
          (data)=>
          {
            console.log(data);
            this.router.navigateByUrl('/distributeWork');
          }
        );
    }
  }

}
