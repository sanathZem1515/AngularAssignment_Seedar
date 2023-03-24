import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashkickNameComponent } from './cashkick-name.component';

describe('CashkickNameComponent', () => {
  let component: CashkickNameComponent;
  let fixture: ComponentFixture<CashkickNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashkickNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashkickNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
