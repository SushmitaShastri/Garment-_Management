import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeData: any;
  errorMsg: any;
  errorTrue = false;

  constructor(private _service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    this._service.employeeList().subscribe((data:any)=>{
      //console.log("data "+JSON.stringify(data["data"]));
      this.employeeData = data["data"];
    });
  }
  editData(edata: any)
  {
    this._service.setEmployeeData(edata);
    this.router.navigateByUrl('editemployee');
  }
  deleteEmployee(eid:any)
  {
    const d = confirm("Are you sure to delete?");
    if(d)
    {
      console.log(eid);
        this._service.deleteEmployee({"eid":eid}).subscribe(
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
