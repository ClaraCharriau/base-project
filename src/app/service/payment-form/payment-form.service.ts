import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

export interface ClientInfos {
  submittedForm: FormGroup
}

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {

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

    const currentClientStorage = this.getClientStorage();

    // Je récupère l'objet value du FormGroup
    currentClientStorage.push(paymentForm.value);

    // le stocker en string dans localStorage
    localStorage.setItem('client-storage', JSON.stringify(currentClientStorage));

  }
  


}
