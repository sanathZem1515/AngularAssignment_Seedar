import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashkickLaunchedComponent } from './cashkick-launched.component';

describe('CashkickLaunchedComponent', () => {
  let component: CashkickLaunchedComponent;
  let fixture: ComponentFixture<CashkickLaunchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashkickLaunchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashkickLaunchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
