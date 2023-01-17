import { Injectable } from '@angular/core';
import { Product } from 'src/mocks/product-list.mock';
import { ProductsService } from '../products/products.service';



@Injectable({
  providedIn: 'root'
})
export class RecentlyConsultedService {

  constructor(private productsService : ProductsService) { }

  // --> METHODE 1 : CREATON HISTORIQUE + ENREGISTREMENT LOCALSTORAGE 
  // fonction qui crée un historique 
  private createHistorique()  {
  // transformation du tableau en chaine de caractères 
  const newHistorique = JSON.stringify([]);
  // j'enregistre l'historique dans le localStorage 
  localStorage.setItem('historique', newHistorique);
  }

  // retourne l'historique ou créer un historique et le retourne 
  getHistorique() {
    // je récupère l'historique 
    const historique = localStorage.getItem('historique');
    // si il existe : 
    if(historique) {
      // je le transforme en objet et le retourne 
      return JSON.parse(historique);
    } else {
        // j'appelle la fonction createHistorique() pour le créer
        this.createHistorique();
        // je rappelle la fonction createHistorique() pour le récupérer
        this.getHistorique();
      }
    }

    // Méthode 2 
    // fonction pour ajouter un produit au panier
    addProductToHistorique(product : Product) {
      // on récupère l'historique 

      let historique = this.getHistorique();
      // ajout d'un produit dans l'historique 

      // est-ce que le produit existe déjà dans le localStorage?
      const existingProduct = historique.find((newproduct: Product) => newproduct.id === product.id);

      if (existingProduct) {
        return } 
        else if (historique.length >= 4) {
          historique.splice(0, 1);
          // splice permet de 
          // 1 = index pour retirer le produit 
          // 1 = nombre de produit que je veux retirer
          historique.push(product);
          // push permet de se mettre à la fin de l'historique 
        } 
        else {
          historique.push(product);
        }
        // enregistrement de l'historique dans localStorage 
        localStorage.setItem('historique', JSON.stringify(historique));
        }
      }

    //   const historique = this.getHistorique();
    //   // ajout d'un produit dans l'historique 
    //   historique.push(product);
    //   // enregistrement de l'historique dans localStorage
    //   localStorage.setItem('historique', JSON.stringify(historique));
    // }
  
  
  





