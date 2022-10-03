import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-rawmaterial',
  templateUrl: './rawmaterial.component.html',
  styleUrls: ['./rawmaterial.component.css']
})
export class RawmaterialComponent implements OnInit {

  rawMaterialData: any;
  errorMsg: any;
  errorTrue = false;

  constructor(private _service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    this._service.rawMaterialList().subscribe((data:any)=>{
      console.log("data "+JSON.stringify(data["data"]));
      this.rawMaterialData = data["data"];
    });
  }
  editData(rdata: any)
  {
    this._service.setRawMaterialData(rdata);
    this.router.navigateByUrl('editRawMaterial');
  }
  deleterawmaterial(rid:any)
  {
    const d = confirm("Are you sure to delete?");
    if(d)
    {
      console.log(rid);
        this._service.deleteRawMaterial({"rid":rid}).subscribe(
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
