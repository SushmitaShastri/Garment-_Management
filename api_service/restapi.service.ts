import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  setdistributeData(vdata: any) {
    throw new Error('Method not implemented.');
  }
  loginUrl = "http://localhost:3000/login";
  vendorUrl = "http://localhost:3000/vendorList";
  catalogUrl = "http://localhost:3000/catalogList";
  editVendorUrl = "http://localhost:3000/editVendor";
  deleteVendorUrl = "http://localhost:3000/deleteVendor";
  addVendorUrl = "http://localhost:3000/addVendor";
  addcatalogUrl  = "http://localhost:3000/addCatalog";
  distributeUrl = "http://localhost:3000/listDistribute";
  addDistributeUrl = "http://localhost:3000/addDistribute";
  editDistributeUrl = "http://localhost:3000/editDistribute";
  deleteDistributeUrl = "http://localhost:3000/deleteDistribute";
  rawMaterialUrl = "http://localhost:3000/ListRawMaterial";
  editRawMaterialUrl = "http://localhost:3000/editRawMaterial";
  deleteRawMaterialUrl = "http://localhost:3000/deleteRawMaterial";
  addRawMaterialUrl = "http://localhost:3000/addRawMaterial";
  vendorData: any;
  distributeData:any;
  rawMaterialData :any;
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
  catalogList():Observable<any[]>
  {
    return this.http.get<any>(this.catalogUrl);
  }
  rawMaterialList():Observable<any[]>
  {
    return this.http.get<any>(this.rawMaterialUrl);
  }
  editVendor(editVendorData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editVendorUrl,editVendorData);
  }
  editDistribute(editDistributeData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editDistributeUrl,editDistributeData);
  }
  editRawMaterial(editRawmaterialData:any):Observable<any[]>
  {
    return this.http.post<any>(this.editRawMaterialUrl,editRawmaterialData);
  }
  setVendorData(vdata:any)
  {
    this.vendorData = vdata;
  }
  setDistributeData(ddata:any)
  {
    this.distributeData = ddata;
  }
  setRawMaterialData(rdata:any)
  {
    this.rawMaterialData = rdata;
  }
  deleteVendor(vid:any)
  {
    return this.http.post<any>(this.deleteVendorUrl,vid);
  }
  deleteDistribute(did:any)
  {
    return this.http.post<any>(this.deleteDistributeUrl,did);
  }
  deleteRawMaterial(rid:any)
  {
    return this.http.post<any>(this.deleteRawMaterialUrl,rid);
  }
  addVendor(addVendorData:any)
  {
    return this.http.post<any>(this.addVendorUrl,addVendorData);
  }
  addcatalog(addCatalogData:any)
  {
    return this.http.post<any>(this.addcatalogUrl,addCatalogData);
  }
  addRawMaterial(addRawMaterialData:any)
  {
    return this.http.post<any>(this.addRawMaterialUrl,addRawMaterialData);
  }
  distributeList()
  {
    return this.http.get<any>(this.distributeUrl);
  }
  addDistribute(addDistributeData:any)
  {
    return this.http.post<any>(this.addDistributeUrl,addDistributeData);
  }
}
