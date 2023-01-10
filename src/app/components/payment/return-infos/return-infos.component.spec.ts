import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnInfosComponent } from './return-infos.component';

describe('ReturnInfosComponent', () => {
  let component: ReturnInfosComponent;
  let fixture: ComponentFixture<ReturnInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
