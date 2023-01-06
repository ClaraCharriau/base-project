import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementsSectionComponent } from './engagements-section.component';

describe('EngagementsSectionComponent', () => {
  let component: EngagementsSectionComponent;
  let fixture: ComponentFixture<EngagementsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
