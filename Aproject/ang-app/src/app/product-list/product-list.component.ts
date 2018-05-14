import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ProServiceService} from '../pro-service.service';
import {Product} from '../../Product';
import {FProduct} from '../../FProduct';
import {BProduct} from '../../BProduct';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[];
  fproducts: FProduct[];
  bproducts: BProduct[];
  name: any;
  product: Product;
  specProduct: Product[];
  getSelectedbrand: boolean = false;
  IsAllProduts: boolean  =true;
  totalClickedProduct: Product[] = [];
  checkbox: boolean;
  constructor(private productService: ProServiceService) { }

  ngOnInit() {
   this.getProducts();
   this.getFeaturedProducts();
   this.getBrandedProducts();
  
  }
  getProducts(){
    this.productService.getProducts().subscribe(product => this.products = product);
   }
   getFeaturedProducts(){
    this.productService.getFeaturedProducts().subscribe(product => this.fproducts = product);
   }
   getBrandedProducts(){
    this.productService.getBrandedProducts().subscribe(product => this.bproducts = product);
   }
   
    
      getBrandById(getSelectedbrandId){
      //  alert(typeof getSelectedbrandId);
         this.getSelectedbrand  =true;
         this.IsAllProduts = false;

         this.productService.getProdcutByBrandId(getSelectedbrandId).subscribe(rproduct => this.product = rproduct, (error) => console.log(error));
         
         if(this.checkbox==true && typeof this.product != 'undefined' && ifalreadyExist(this.totalClickedProduct, this.product))
           { this.totalClickedProduct.push(this.product);this.bproducts.filter(function(checkbox){
             
            if(!getSelectedbrandId) return this.checkbox==false;
           })
          }
          if(this.checkbox==false) {this.totalClickedProduct.slice(getSelectedbrandId,1);console.log("Removed ITem:" + this.product);}
       
         function ifalreadyExist(totalClickedProduct , product): boolean{
            let flag = false;
            if(totalClickedProduct.indexOf(product) == -1)
             flag = true;
             console.log("object present nahi hai" + flag);
             return flag;
           } 
        
         console.log(this.totalClickedProduct);
     // alert(JSON.stringify(this.product));

       //  this.product = !this.product;
        }
        getFProductById(id){
          //  alert(typeof getSelectedbrandId);
              this.getSelectedbrand  =true;
              this.IsAllProduts = false;
       //      this.productService.getProdcutByFeature(id).subscribe(fproduct => this.product = fproduct, (error) => console.log(error));
          
         // alert(JSON.stringify(this.product));
    
           //  this.product = !this.product;
            }
   
}
