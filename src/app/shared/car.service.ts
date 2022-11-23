import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CarDetails } from './car.model';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  
  // getCarDetail(): Observable<any> {
  //   return this.http.get('./assets/displaycar.json')
  // }
  getCarDetail(): Observable<CarDetails[]> {
    const url = './assets/displaycar.json';
    return this.http.get(
      url
    ) as Observable<CarDetails[]>;
  }
 
}
