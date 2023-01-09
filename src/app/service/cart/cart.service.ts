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
  getCart(): CartProduct[] {
    const cart = localStorage.getItem('cart');

    // On vérifie s'il existe, et on le retourne converti en objet avec .parse
    if (cart) {
      return JSON.parse(cart);
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
  
    // Ensuite, on enregistrera le nouveau panier dans le localStorage , on recalculera le total et le nombre de produits
    // localStorage.setItem('cart',JSON.stringify(cart))
    
    // enregistrer le panier
    this.saveCart(cart);
    this.getCartTotal();
    this.getProductQuantity();
  }

    // Fonction pour calculer le prix total du panier
  getCartTotal():void{
    // on récupère le prdt
    const cart = this.getCart();
    // On calcule le prix total
    const total = cart.reduce((accumulator:number, currentValue: CartProduct)=>{
      // Récupèrer directement le prdt ds les mocks
      const product = this.productsService.getProductById(currentValue.product.id);
      // Si le prdt n'existe pas, retournerla valeur de l'accumulator
      if(!product)return accumulator;
      // Sinon, retourner: accumulator + prix du prdt + sa quantité
      return accumulator + (currentValue.quantity * product.price);
    }, 0);
    // Assigner valeur du total à la propriété totalCart
    this.totalPrice = total;
  }

  // et ne s'affiche que si la page est rafraîchi...

  getProductQuantity():void{
    const cart = this.getCart();
    const total = cart.reduce((accumulator:number, currentValue:CartProduct)=>{
      return accumulator += currentValue.quantity;
    }, 0);
    this.productQuantity = total;
  }

  // Initialise le panier à l'ouverture de l'app
  initCart(){
    this.getCart();
    this.getCartTotal();
    this.getProductQuantity();
  }
  

  }


// function getCartTotal() {
//   throw new Error('Function not implemented.');
// }

