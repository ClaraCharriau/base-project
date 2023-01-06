import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPaymentInfosComponent } from './cart-payment-infos.component';

describe('CartPaymentInfosComponent', () => {
  let component: CartPaymentInfosComponent;
  let fixture: ComponentFixture<CartPaymentInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPaymentInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPaymentInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
