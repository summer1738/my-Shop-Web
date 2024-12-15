import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  BASE_URL = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  postProduct(product: any): Observable <any>{
    return this.httpClient.post(this.BASE_URL + "products", product)
  }

  getAllProducts(): Observable <any> {
    return this.httpClient.get(this.BASE_URL + "products")
  }

}
