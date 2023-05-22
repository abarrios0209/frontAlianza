import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyHistoryComponent } from './emergency-history.component';

describe('EmergencyHistoryComponent', () => {
  let component: EmergencyHistoryComponent;
  let fixture: ComponentFixture<EmergencyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
