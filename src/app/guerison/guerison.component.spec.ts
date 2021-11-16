import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerisonComponent } from './guerison.component';

describe('GuerisonComponent', () => {
  let component: GuerisonComponent;
  let fixture: ComponentFixture<GuerisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuerisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuerisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
