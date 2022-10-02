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
  deleteVendorUrl = "http://localhost:3000/deleteVendor";
  addVendorUrl = "http://localhost:3000/addVendor";
  vendorData: any;
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
  editVendor(editVendorData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editVendorUrl,editVendorData);
  }
  setVendorData(vdata:any)
  {
    this.vendorData = vdata;
  }
  deleteVendor(vid:any)
  {
    return this.http.post<any>(this.deleteVendorUrl,vid);
  }
  addVendor(addVendorData:any)
  {
    return this.http.post<any>(this.addVendorUrl,addVendorData);
  }
}
