import { environment } from './../../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from '../models/product.model'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly BASE_URL = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<any> {
    const url = `${this.BASE_URL}/products/v1.0/`
    return this.httpClient.get<any>(url, {
      observe: 'body',
      withCredentials: true
    })
  }

  public getProductById(projectId): Observable<Product> {
    const url = `${this.BASE_URL}/products/v1.0/${projectId}`
    return this.httpClient.get<Product>(url, {
      observe: 'body',
      withCredentials: true
    })
  }

  public deleteProductById(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.BASE_URL}/products/v1.0/${id}`, {
      observe: 'body',
      withCredentials: true
    })
  }

  public addNewProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.BASE_URL}/products/v1.0/`, product, {
      observe: 'body',
      withCredentials: true
    })
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.BASE_URL}/products/v1.0/`, product, {
      observe: 'body',
      withCredentials: true
    })
  }

}
