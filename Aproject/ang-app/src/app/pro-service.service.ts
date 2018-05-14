import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { from } from 'rxjs';
import { Observable, of} from 'rxjs';
import { map, filter, scan, find } from 'rxjs/operators';

import { Product } from '../Product';
import {FProduct} from '../FProduct';
import {BProduct} from '../BProduct';
@Injectable({
  providedIn: 'root'
})
export class ProServiceService {

  products: Product[];
  product: Product;
  pro: Observable<Product>;
  constructor(private http: Http) { }
  getProducts(): Observable<Product[]>{
    //  console.log('fnjhsjfhdjs');
    return this.http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/products').pipe(
    map((res:Response) => <Product[]>res.json()));
    } 
    getFeaturedProducts(): Observable<FProduct[]>{
      return this.http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/features').pipe(
        map((res:Response) => <FProduct[]>res.json()));
    }
   
    getBrandedProducts(): Observable<BProduct[]>{
      return this.http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/brands').pipe(
        map((res:Response) => <BProduct[]>res.json()));
    }
    getProdcutByBrandId(id: string): Observable<Product> {
    this.pro =  this.getProducts().pipe(map(products => products.find(product => product.brand_id == id)));
   // alert(typeof r);
    
      //alert(JSON.stringify(r));
     return this.pro;
    }
    /*getProdcutByFeature(id: string): Observable<Product> {
      return this.getProducts().pipe(map(products => products.find(product => product.feature_id == id)));
    //alert(JSON.stringify(r));
     //product.feature_id is not available in json
    } */
    
}
