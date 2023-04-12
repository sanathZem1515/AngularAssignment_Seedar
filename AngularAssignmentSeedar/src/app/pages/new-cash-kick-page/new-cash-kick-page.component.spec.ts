import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCashKickPageComponent } from './new-cash-kick-page.component';

describe('NewCashKickPageComponent', () => {
  let component: NewCashKickPageComponent;
  let fixture: ComponentFixture<NewCashKickPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCashKickPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCashKickPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
