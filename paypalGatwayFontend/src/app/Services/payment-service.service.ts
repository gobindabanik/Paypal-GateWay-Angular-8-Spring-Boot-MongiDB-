import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http:HttpClient) {}

  baseUrl: string = "http://localhost:8080/";
  newPayment(Order:any): Observable<any> {
    console.log('AttempMakePayMent::');
    return this.http.post<any>(`${this.baseUrl}payment/pay`,Order);
  }
  
    getSuccessRequest(paymentId,PayerID): Observable<any> {
    console.log('AttempMakePayMent::');
    return this.http.get<any>(`${this.baseUrl}payment/success/`,{params: {paymentId,PayerID}});
  }
}
