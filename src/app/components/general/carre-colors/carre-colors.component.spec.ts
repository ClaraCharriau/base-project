import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreColorsComponent } from './carre-colors.component';

describe('CarreColorsComponent', () => {
  let component: CarreColorsComponent;
  let fixture: ComponentFixture<CarreColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
