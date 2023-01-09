import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {

  // Créer le conteneur pour les infos clients
  private storeClientInfos() {
    const newClientInfos = JSON.stringify([]);
    localStorage.setItem('Client infos', newClientInfos);
  }

  // Récupérer les infos clients
  getClientInfos() {
    // on récupère le storage des infos clients
    const clientInfos = localStorage.getItem('Client infos');

    // On vérifie s'il existe, et on le retourne converti en objet avec parse
    if (clientInfos) {
      return JSON.parse(clientInfos);
    } else {
      this.storeClientInfos();
      this.getClientInfos();
    }
  }


}
