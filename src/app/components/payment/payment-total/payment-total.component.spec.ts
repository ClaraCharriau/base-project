import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTotalComponent } from './payment-total.component';

describe('PaymentTotalComponent', () => {
  let component: PaymentTotalComponent;
  let fixture: ComponentFixture<PaymentTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
