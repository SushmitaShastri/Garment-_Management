import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  loginUrl = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }
  message:any;
  login(credentials:any):Observable<any[]>
  {
    return this.http.post<any>(this.loginUrl,credentials);
  }
}
