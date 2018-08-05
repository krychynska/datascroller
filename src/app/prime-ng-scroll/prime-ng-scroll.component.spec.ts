import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgScrollComponent } from './prime-ng-scroll.component';

describe('PrimeNgScrollComponent', () => {
  let component: PrimeNgScrollComponent;
  let fixture: ComponentFixture<PrimeNgScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNgScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNgScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
