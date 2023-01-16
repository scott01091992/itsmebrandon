import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydroponicgardenComponent } from './hydroponicgarden.component';

describe('HydroponicgardenComponent', () => {
  let component: HydroponicgardenComponent;
  let fixture: ComponentFixture<HydroponicgardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydroponicgardenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydroponicgardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
