import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesdetailsComponent } from './devicesdetails.component';

describe('DevicesdetailsComponent', () => {
  let component: DevicesdetailsComponent;
  let fixture: ComponentFixture<DevicesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
