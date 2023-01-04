import { Injectable } from '@angular/core';
import { Product, PRODUCTLIST } from 'src/mocks/product-list.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTLIST;
  }

  // Retourne les produits d'une catégorie
  getProductByCategory(category: string): Product | undefined {
    return PRODUCTLIST.find(product => product.category === category);
  }

  // Retourne un seul produit selon l'id
  getProductById(id: number): Product | undefined {
    return PRODUCTLIST.find(product => product.id === id);
  }


}
