import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL: string = 'http://localhost:8000/api';

export interface Product {
  id: Number,
  product_name: String,
  product_price: Number,
  user_id: Number
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/product');
  }
}
