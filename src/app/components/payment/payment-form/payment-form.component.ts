import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  paymentForm!: FormGroup;

  validationErrors: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initPaymentForm();
  }

  initPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      client_mailAdress: [null, [Validators.required]],
      client_password: [null, [Validators.required]],
      client_firstName: [null, [Validators.required]],
      client_lastName: [null, [Validators.required]],
      client_birthDate: [null, [Validators.required]],
      client_phoneNumber: [null, [Validators.required]],
      billing_adress: [null, [Validators.required]],
      billing_postCode: [null, [Validators.required]],
      billing_city: [null, [Validators.required]],
      card_number: [null, [Validators.required]],
      card_expiration: [null, [Validators.required]],
      card_cvv: [null, [Validators.required]],
    });
  }

  onPay() {

    console.log(this.paymentForm.value);

    // réinitialise le tableau d'erreur à chaque fois
    this.validationErrors = [];
  
      if(this.paymentForm.invalid) {
        // Si le formulaire est invalide
        Object.keys(this.paymentForm.controls).forEach((inputValue) => {
            const currentInput = this.paymentForm.get(inputValue);
  
            if(currentInput && currentInput.status === "INVALID") {
              this.validationErrors.push(inputValue);
            }
          })
        
      } else {
        // Créer une commande et rediriger vers payment success
        console.log('succès');
        
        // this.router.navigate(['/payment-success']);
      }
  }
}
