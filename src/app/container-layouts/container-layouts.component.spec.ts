import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLayoutsComponent } from './container-layouts.component';

describe('ContainerLayoutsComponent', () => {
  let component: ContainerLayoutsComponent;
  let fixture: ComponentFixture<ContainerLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
