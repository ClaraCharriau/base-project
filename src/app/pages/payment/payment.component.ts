import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  @ViewChild('f') form!: NgForm;

  public onSubmit(){
  this.form.ngSubmit.emit();
  }

}
