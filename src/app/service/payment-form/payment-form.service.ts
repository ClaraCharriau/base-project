import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

export interface ClientInfos {
  submittedForm: FormGroup
}

@Injectable({
  providedIn: 'root'
})

export class PaymentFormService {

  currentClientStorage: any;
  
  // Créer le conteneur pour les infos clients
  private createClientStorage() {
    const newClientStorage = JSON.stringify([]);
    localStorage.setItem('client-storage', newClientStorage);
  }

  // Récupérer les infos clients
  getClientStorage() {
    // on récupère le storage des infos clients
    const clientStorage = localStorage.getItem('client-storage');

    // On vérifie s'il existe, et on le retourne converti en objet avec parse
    if (clientStorage) {
      return JSON.parse(clientStorage);
    } else {
      this.createClientStorage();
      this.getClientStorage();
    }
  }

  storeClientInfos(paymentForm: FormGroup) {

    // Je remets à zéro mon stockage
    const currentClientStorage = [];

    // Je récupère l'objet value du FormGroup
    currentClientStorage.push(paymentForm.value);

    // le stocker en string dans localStorage
    localStorage.setItem('client-storage', JSON.stringify(currentClientStorage));

  }

  getClientInfos(): void {
    const clientStorage = this.getClientStorage();

    // Dans le storage [] je récupère mon objet avec les réponses
    clientStorage.find((object: any) =>{ 
      this.currentClientStorage = object;
    });

    return this.currentClientStorage;

  }
  

}
