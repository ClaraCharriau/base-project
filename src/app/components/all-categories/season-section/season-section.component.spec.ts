import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonSectionComponent } from './season-section.component';

describe('SeasonSectionComponent', () => {
  let component: SeasonSectionComponent;
  let fixture: ComponentFixture<SeasonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
