import { Component, Input } from '@angular/core';
import { CartProduct, CartService } from 'src/app/service/cart/cart.service';
import { Product } from 'src/mocks/product-list.mock';
import { CartProductCardComponent } from '../../cart/cart-product-card/cart-product-card.component';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  @Input() product!:Product;

  quantity: number = 1;

  constructor(private cartService: CartService) {
  }

  addToCart() {

    // La fonction va vérifier s’il y a un produit,
    // s’il existe on va créer un nouvel objet de type BasketProduct.
      if(!this.product) return;
    
    const cartProduct: CartProduct = {
        product: this.product,
        quantity: this.quantity
    }
    this.cartService.addProductToCart(cartProduct);
    this.cartService.getCartTotal();
    this.cartService.getProductQuantity();
    }


}
