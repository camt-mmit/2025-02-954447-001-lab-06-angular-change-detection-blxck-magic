import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab06 } from './lab-06';

describe('Lab06', () => {
  let component: Lab06;
  let fixture: ComponentFixture<Lab06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab06]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
