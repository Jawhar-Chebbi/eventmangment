import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcrudComponent } from './listcrud.component';

describe('ListcrudComponent', () => {
  let component: ListcrudComponent;
  let fixture: ComponentFixture<ListcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
