import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterEventComponent } from './affecter-event.component';

describe('AffecterEventComponent', () => {
  let component: AffecterEventComponent;
  let fixture: ComponentFixture<AffecterEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
