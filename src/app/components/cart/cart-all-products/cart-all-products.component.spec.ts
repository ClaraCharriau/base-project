import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAllProductsComponent } from './cart-all-products.component';

describe('CartAllProductsComponent', () => {
  let component: CartAllProductsComponent;
  let fixture: ComponentFixture<CartAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAllProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
