import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  paymentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      client_mailAdress: [null],
      client_password: [null],
      client_firstName: [null],
      client_lastName: [null],
      client_birthDate: [null],
      client_phoneNumber: [null],
      billing_adress: [null],
      billing_postCode: [null],
      billing_city: [null],
      card_number: [null],
      card_expiration: [null],
      card_cvv: [null],
    });
  }

  onPay() {
    console.log(this.paymentForm.value);
  }

}
