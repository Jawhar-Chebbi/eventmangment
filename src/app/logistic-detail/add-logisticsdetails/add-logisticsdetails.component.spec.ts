import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogisticsdetailsComponent } from './add-logisticsdetails.component';

describe('AddLogisticsdetailsComponent', () => {
  let component: AddLogisticsdetailsComponent;
  let fixture: ComponentFixture<AddLogisticsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLogisticsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLogisticsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
