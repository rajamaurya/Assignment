import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable, of} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import {Product} from '../Product';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: Http) { }
  /*getProducts(): Observable<Product[]>{
      
    return this.http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/products')
   .map((res:Response) => <Product[]>res.json());
    
  }  */
}
