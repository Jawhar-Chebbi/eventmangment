import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelogisticsComponent } from './updatelogistics.component';

describe('UpdatelogisticsComponent', () => {
  let component: UpdatelogisticsComponent;
  let fixture: ComponentFixture<UpdatelogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
