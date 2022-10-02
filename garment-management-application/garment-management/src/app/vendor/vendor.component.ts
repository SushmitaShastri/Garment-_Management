import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendorData: any;
  errorMsg: any;
  errorTrue = false;

  constructor(private _service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    this._service.vendorList().subscribe((data:any)=>{
      //console.log("data "+JSON.stringify(data["data"]));
      this.vendorData = data["data"];
    });
  }
  editData(vdata: any)
  {
    this._service.setVendorData(vdata);
    this.router.navigateByUrl('editvendor');
  }
  deleteVendor(vid:any)
  {
    const d = confirm("Are you sure to delete?");
    if(d)
    {
      console.log(vid);
        this._service.deleteVendor({"vid":vid}).subscribe(
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
              window.location.reload();
            }
          }
        );
    }
  }
}
