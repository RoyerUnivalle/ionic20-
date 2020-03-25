import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/// models
// ....

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://www.mocky.io/v2/5e7b707d2d0000123b11a0e2';

  constructor(private http: HttpClient) {

   }

   getData(): Observable<any> {
    return this.http.get<any>(this.url);
   }
}
