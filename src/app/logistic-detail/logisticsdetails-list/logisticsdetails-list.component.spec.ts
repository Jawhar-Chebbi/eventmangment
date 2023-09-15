import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsdetailsListComponent } from './logisticsdetails-list.component';

describe('LogisticsdetailsListComponent', () => {
  let component: LogisticsdetailsListComponent;
  let fixture: ComponentFixture<LogisticsdetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsdetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsdetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
