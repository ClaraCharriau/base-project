import { Component, Input } from '@angular/core';
import { Carre } from '../../general/carre-colors/carre-colors.component';

export interface Product {
  img : string;
  title : string;
  price : number;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  products: Product[] = [
    {
      img : "assets/product-card/product1.png",
      title : "PULL EN V CACHEMIRE",
      price : 85,
    },
    {
      img : "assets/product-card/product2.png",
      title : "PULL EN V CACHEMIRE",
      price : 70,
    },
    {
      img : "assets/product-card/product3.png",
      title : "PULL EN V CACHEMIRE",
      price : 60,
    },
    {
      img : "assets/product-card/product4.png",
      title : "PULL EN V CACHEMIRE",
      price : 55,
    },
    {
      img : "assets/product-card/product5.png",
      title : "PULL EN V CACHEMIRE",
      price : 45,
    },
    {
      img : "assets/product-card/product6.png",
      title : "PULL EN V CACHEMIRE",
      price : 65,
    },
    {
      img : "assets/product-card/product7.png",
      title : "PULL EN V CACHEMIRE",
      price : 49.99,
    },
    {
      img : "assets/product-card/product8.png",
      title : "PULL EN V CACHEMIRE",
      price : 39.99,
    },
  
  ]
  @Input() carre!: Carre[] 
  }
  

