import { Injectable } from '@angular/core';
import { Product } from 'src/mocks/product-list.mock';
import { ProductsService } from '../products/products.service';

export interface CartProduct {
  product: Product,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  totalPrice: number = 0;
  productQuantity: number = 0;

  constructor(private productsService: ProductsService) { }


  // Création d'un panier 'cart'
  private createCart() {
    const newCart = JSON.stringify([]);
    localStorage.setItem('cart', newCart);
  }

  // Vérifie si le panier existe et le crée s’il n’existe pas
  getCart() {
    const cart = localStorage.getItem('cart');

    // On vérifie s'il existe, et on le retourne converti en objet avec .parse
    if (cart) {
      return JSON.parse(cart);
    } else {
      this.createCart();
      this.getCart();
    }
  }

  // Enregistre le panier
  private saveCart(cart: CartProduct[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Ajoute un produit au panier
  addProductToCart(cartProduct: CartProduct) {

    const cart = this.getCart();
    cart.push(cartProduct);

    // et enregistre le panier
    this.saveCart(cart);

  }

}
