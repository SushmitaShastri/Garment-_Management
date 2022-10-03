import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-distributework',
  templateUrl: './distributework.component.html',
  styleUrls: ['./distributework.component.css']
})
export class DistributeworkComponent implements OnInit {
  distributeData: any;
  errorMsg: any;
  errorTrue = false;

  constructor(private _service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    this._service.distributeList().subscribe((data:any)=>{
      console.log("data "+JSON.stringify(data["data"]));
      this.distributeData = data["data"];
    });
  }
  editData(ddata: any)
  {
    this._service.setDistributeData(ddata);
    this.router.navigateByUrl('editdistributework');
  }
  deleteDistribute(assignid:any)
  {
    const d = confirm("Are you sure to delete?");
    if(d)
    {
      console.log(assignid);
        this._service.deleteDistribute({"assignid":assignid}).subscribe(
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
