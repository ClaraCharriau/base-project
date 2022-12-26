import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyConsultedComponent } from './recently-consulted.component';

describe('RecentlyConsultedComponent', () => {
  let component: RecentlyConsultedComponent;
  let fixture: ComponentFixture<RecentlyConsultedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyConsultedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyConsultedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
