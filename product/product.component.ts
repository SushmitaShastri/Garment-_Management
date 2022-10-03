import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../api_service/restapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _service:RestapiService,private router:Router) { }
  errorMsg: any;
  errorTrue=false;
  productData: any;
  ngOnInit(): void {
    this._service.productList().subscribe((data:any)=>{
      //console.log("data "+JSON.stringify(data["data"]));
      this.productData = data["data"];
    });
  }
  editProduct(pdata: any)
  {
    this._service.setProductData(pdata);
    this.router.navigateByUrl('editProduct');
  }
  deleteProduct(pid:any)
  {
    const d = confirm("Are you sure to delete?");
    if(d)
    {
      console.log(pid);
        this._service.deleteProduct({"pid":pid}).subscribe(
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
