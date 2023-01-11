import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClientInfos, PaymentFormService } from 'src/app/service/payment-form/payment-form.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  clientStorage: ClientInfos[] = [];
  public paymentForm!: FormGroup;

  // Tableau contenant les erreurs
  validationErrors: string[] = [];

  constructor(private paymentService: PaymentFormService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initPaymentForm();
    this.getClientStorage();
  }

  // Initialiser la récupération des données clients
  getClientStorage() {
    this.clientStorage = this.paymentService.getClientStorage();
  }

  // Création du formulaire
  initPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      client_mailAdress: [null],
      client_password:[null],
      client_firstName: [null],
      client_lastName:[null],
      client_birthDate:[null],
      client_phoneNumber: [null],
      billing_adress: [null],
      billing_postCode: [null],
      billing_city:[null],
      card_number: [null],
      card_expiration:[null],
      card_cvv: [null],
    });

  }

  onFormSubmit() {

    // réinitialise le tableau d'erreur à chaque fois
    this.validationErrors = [];

    if (this.paymentForm.invalid) {

      // Si le formulaire est invalide
      Object.keys(this.paymentForm.controls).forEach((inputValue) => {
        const currentInput = this.paymentForm.get(inputValue);

        if (currentInput && currentInput.status === "INVALID") {
          this.validationErrors.push(inputValue);
        }
      })

    } else {
    // Enregistrer les réponses dans localstorage et rediriger vers payment success

      this.paymentService.storeClientInfos(this.paymentForm);
      this.router.navigate(['/payment-success']);
    }
  }

}
