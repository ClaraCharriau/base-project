import { Component } from '@angular/core';
import { CartProduct, CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart-all-products',
  templateUrl: './cart-all-products.component.html',
  styleUrls: ['./cart-all-products.component.css']
})
export class CartAllProductsComponent {

  cart: CartProduct[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.getCart();
    this.cart = this.cartService.getCart();
  }
  
  getCart() {
    this.cart = this.cartService.getCart();
  }
  removeProduct(index:number){
    this.cartService.removeProduct(index);
    this.getCart();
    
  }
}
