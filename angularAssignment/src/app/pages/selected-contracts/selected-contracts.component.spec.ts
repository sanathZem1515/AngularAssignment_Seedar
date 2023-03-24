import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedContractsComponent } from './selected-contracts.component';

describe('SelectedContractsComponent', () => {
  let component: SelectedContractsComponent;
  let fixture: ComponentFixture<SelectedContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedContractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
