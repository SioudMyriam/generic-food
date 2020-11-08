import { Product } from './../models/product.model'
import { environment } from './../../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders, HttpEventType } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly BASE_URL = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getProducts<T>(): Observable<Product[]> {
    const url = `${this.BASE_URL}/products/v1.0/`
    return this.httpClient.get<any>(url, {
      observe: 'body',
      withCredentials: true
    })
  }
}
