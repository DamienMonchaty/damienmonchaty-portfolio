import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppe1Component } from './ppe1.component';

describe('Ppe1Component', () => {
  let component: Ppe1Component;
  let fixture: ComponentFixture<Ppe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ppe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
