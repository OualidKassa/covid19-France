import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecesCovidComponent } from './deces-covid.component';

describe('DecesCovidComponent', () => {
  let component: DecesCovidComponent;
  let fixture: ComponentFixture<DecesCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecesCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecesCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
