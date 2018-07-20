import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkankComponent } from './burkank.component';

describe('BurkankComponent', () => {
  let component: BurkankComponent;
  let fixture: ComponentFixture<BurkankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurkankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
