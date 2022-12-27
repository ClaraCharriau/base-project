import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSectionComponent } from './insta-section.component';

describe('InstaSectionComponent', () => {
  let component: InstaSectionComponent;
  let fixture: ComponentFixture<InstaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
