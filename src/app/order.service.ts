import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface payment{
  details:string,
  phone:string,
  city:string
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient:HttpClient) { }
  visaPayApi(id:any,payBody:payment):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{shippingAddress:payBody})
  }
  getUserOrders(userID:any):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`)
  }
}
