import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  loginUrl = "http://localhost:3000/login";
  vendorUrl = "http://localhost:3000/vendorList";
  editVendorUrl = "http://localhost:3000/editVendor";
  editEmployeeUrl="http://localhost:3000/editEmployee";
  deleteVendorUrl = "http://localhost:3000/deleteVendor";
  deleteOrderUrl="http://localhost:3000/deleteOrder";
  deleteEmployeeUrl="http://localhost:3000/deleteEmployee";
  addVendorUrl = "http://localhost:3000/addVendor";
  addEmployeeUrl="http://localhost:3000/addEmployee";
  addOrderUrl="http://localhost:3000/addOrder";
  productUrl="http://localhost:3000/productList";
  employeeUrl="http://localhost:3000/employeeList";
  orderUrl="http://localhost:3000/orderList";
  editOrderUrl="http://localhost:3000/editOrdersssss";
  getpidUrl="http://localhost:3000/getpid";
  getcidUrl="http://localhost:3000/getcid";
  getvidUrl="http://localhost:3000/getvid";
  updateOrderUrl = "http://localhost:3000/dfdsfdsfds";
  
  vendorData: any;
  orderData: any;
  employeeData: any;
  constructor(private http: HttpClient) { }
  message:any;
  login(credentials:any):Observable<any[]>
  {
    return this.http.post<any>(this.loginUrl,credentials);
  }
  vendorList():Observable<any[]>
  {
    return this.http.get<any>(this.vendorUrl);
  }
  orderList():Observable<any[]>
  {
    return this.http.get<any>(this.orderUrl);
  }
  productList():Observable<any[]>
  {
    return this.http.get<any>(this.productUrl);
  }
  employeeList():Observable<any[]>
  {
    return this.http.get<any>(this.employeeUrl);
  }
  editVendor(editVendorData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editVendorUrl,editVendorData);
  }
  editEmployee(editEmployeeData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editEmployeeUrl,editEmployeeData);
  }
  editOrder(editOrderData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editOrderUrl,editOrderData);
  }
  updateOrder(editOrderData:any):Observable<any[]>
  {
    return this.http.post<any>(this.updateOrderUrl,editOrderData);
  }
  setVendorData(vdata:any)
  {
    this.vendorData = vdata;
  }
  setOrderData(odata:any)
  {
    this.orderData = odata;
  }
  setEmployeeData(edata:any)
  {
    this.employeeData=edata;
  }
  deleteVendor(vid:any)
  {
    return this.http.post<any>(this.deleteVendorUrl,vid);
  }
  deleteOrder(oid:any)
  {
    return this.http.post<any>(this.deleteOrderUrl,oid);
  }
  deleteEmployee(eid:any)
  {
    return this.http.post<any>(this.deleteEmployeeUrl,eid);
  }
  addVendor(addVendorData:any)
  {
    return this.http.post<any>(this.addVendorUrl,addVendorData);
  }
  addOrder(addOrderData:any){
    return this.http.post<any>(this.addOrderUrl,addOrderData);
  }
  addEmployee(addEmployeeData:any){
    return this.http.post<any>(this.addEmployeeUrl,addEmployeeData);
  }
  getcid(){
    return this.http.get<any>(this.getcidUrl);
  }
  getpid(){
    return this.http.get<any>(this.getpidUrl);
  }
  getvid(){
    return this.http.get<any>(this.getvidUrl);
  }
}
