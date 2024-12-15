import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  BASE_URL = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) { }

  postCustomer(customer: any): Observable <any> {
    return this.httpClient.post(this.BASE_URL + "/customer", customer)
  }

  getAllCustomers(): Observable <any> {
    return this.httpClient.get(this.BASE_URL + "/customers")
  }

  getCustomerById(id: number): Observable<any> {
    return this.httpClient.get(this.BASE_URL + "/customer/" + id)
  }

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.httpClient.put(this.BASE_URL + "/customer/" + id, customer)
  }
  
  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL + "/customer/" + id)
  }
}
