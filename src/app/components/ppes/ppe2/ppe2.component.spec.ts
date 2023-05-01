import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppe2Component } from './ppe2.component';

describe('Ppe2Component', () => {
  let component: Ppe2Component;
  let fixture: ComponentFixture<Ppe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ppe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
