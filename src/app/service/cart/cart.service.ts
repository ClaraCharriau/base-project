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

  cart = [];
  totalPrice: number = 0;
  productQuantity: number = 0;

  constructor(private productsService: ProductsService) { }

  // Création d'un panier 'cart'
  private createCart() {
    const newCart = JSON.stringify([]);
    localStorage.setItem('cart', newCart);
  }

  // Vérifie si le panier existe et le crée s’il n’existe pas
  getCart(): CartProduct[] {
    const cart = localStorage.getItem('cart');

    // On vérifie s'il existe, et on le retourne converti en objet avec .parse
    if (cart) {
      console.log(cart);
      this.cart = JSON.parse(cart);
      return this.cart;
    } else {
      this.createCart();
      return this.getCart();
    }
  }

  // Enregistre le panier
  private saveCart(cart: CartProduct[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Ajoute un produit au panier
  addProductToCart(cartProduct: CartProduct) {

    const cart = this.getCart();

    // Est-ce que le produit existe déjà dans le panier ?
    const existingProduct = cart.find((product: CartProduct) => product.product.id === cartProduct.product.id);


    if (existingProduct) {

      // S'il existe, on récupère son id / index
      const cartProductId = cart.indexOf(existingProduct);
      // on incrémente sa quantité
      cart[cartProductId].quantity += cartProduct.quantity;

    } else {

      // S'il n'existe pas on l'ajoute
      cart.push(cartProduct);

    }

    // et enregistre le panier
    this.saveCart(cart);

    // Plus tard on ajoutera le calcul du total et la quantité de produit (voir méthode après)
    // this.getCartTotal();
    // this.getProductQuantity();

  }
  removeProduct(index:number){
    // Récupèrer panier
    const cart = this.getCart();
    // supprimer à l'aide de .splice et l'index passé en argument
    cart.splice(index,1);
  
    // Ensuite, on enregistrera le nouveau pannier dans le localStorage , on recalculera le total et le nombre de produits
    // localStorage.setItem('cart',JSON.stringify(cart))
    
    // enregistrer le panier
    this.saveCart(cart);

    // this.getCartTotal();
    // this.getProductQuantity();
  
  }

}
