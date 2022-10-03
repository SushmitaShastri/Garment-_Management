import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData: any;
  errorMsg: any;
  errorTrue = false;

  constructor(private _service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    this._service.orderList().subscribe((data:any)=>{
     // console.log("data "+JSON.stringify(data["data"]));
      this.orderData = data["data"];
      //console.log(this.orderData)
    });
  }
  editOrder(odata: any)
  {
    this._service.setOrderData(odata);
    this.router.navigateByUrl('editOrder');
  }
  deleteOrder(oid:any)
  {
    const d = confirm("Are you sure to delete?");
    if(d)
    {
      console.log(oid);
        this._service.deleteOrder({"oid":oid}).subscribe(
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
