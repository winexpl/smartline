import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeControlInputComponent } from './date-range-control-input.component';

describe('DateRangeControlInputComponent', () => {
  let component: DateRangeControlInputComponent;
  let fixture: ComponentFixture<DateRangeControlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangeControlInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangeControlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
