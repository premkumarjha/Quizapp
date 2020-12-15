import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  scores: any[] = [{id:1,option:""},{id:2,option:""},{id:3,option:""},{id:4,option:""},{id:5,option:""}];
  items:any;
  totalScoredMarks = 0;
  totalunattemptedquestion=0;
  totalNumberOfQuestion=0;
  constructor(private http: HttpClient) { }
  
  private headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8')

 
  userSignup(url,body){
    return this.http.post(url, body, { headers: this.headers });

  }
}
