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

  // Permet de mettre des espaces en tapant dans l'input du numéro de carte :
  //
  // styleCardNumberInput() {
  //   const cardInput = document.getElementById('card_number');
  //   this.cardInput.addEventListener('input', function (e) {
  //     e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  //   });
  // }

  // Initialiser la récupération des données clients
  getClientStorage() {
    this.clientStorage = this.paymentService.getClientStorage();
  }

  // Création du formulaire
  initPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      client_mailAdress: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      client_password: [null, [Validators.required, Validators.pattern(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/)]],
      client_firstName: [null, [Validators.required]],
      client_lastName: [null, [Validators.required]],
      client_birthDate: [null, [Validators.required, Validators.pattern(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)[0-9]{2}/)]],
      client_phoneNumber: [null, [Validators.pattern(/^[0-9]{10}$/)]],
      billing_adress: [null, [Validators.required]],
      billing_postCode: [null, [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      billing_city: [null, [Validators.required]],
      card_number: [null, [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      card_expiration: [null, [Validators.required]],
      card_cvv: [null, [Validators.required, Validators.pattern(/^[0-9]{3}$/)]],
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
