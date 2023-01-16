import { Injectable } from '@angular/core';
import { Product } from 'src/mocks/product-list.mock';
import { ProductsService } from '../products/products.service';


// création d'une interface qui correspond à un produit du panier 
// --> Méthode 2   
export interface HistoriqueProduct {
  product: Product;
}


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
      // --> si il n'existe pas, ajouter quand meme ?    
    } else {
        // j'appelle la fonction createHistorique() pour le créer
        this.createHistorique();
        // je rappelle la fonction createHistorique() pour le récupérer
        this.getHistorique();
      }
    }

    // Méthode 2 
    // fonction pour ajouter un produit au panier
    addProductToHistorique(historiqueProduct : HistoriqueProduct) {
      // on récupère l'historique 
      const historique = this.getHistorique();
      // ajout d'un produit dans l'historique 
      historique.push(historiqueProduct);
      // enregistrement de l'historique dans localStorage
      localStorage.setItem('historique', JSON.stringify(historique));
    }
  
  }
  





