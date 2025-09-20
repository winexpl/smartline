import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSessionFormComponent } from './quote-session-form.component';

describe('QuoteSessionFormComponent', () => {
  let component: QuoteSessionFormComponent;
  let fixture: ComponentFixture<QuoteSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteSessionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
