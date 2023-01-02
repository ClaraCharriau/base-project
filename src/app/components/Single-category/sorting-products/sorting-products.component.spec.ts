import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingProductsComponent } from './sorting-products.component';

describe('SortingProductsComponent', () => {
  let component: SortingProductsComponent;
  let fixture: ComponentFixture<SortingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
