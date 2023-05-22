import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyConfigComponent } from './emergency-config.component';

describe('EmergencyConfigComponent', () => {
  let component: EmergencyConfigComponent;
  let fixture: ComponentFixture<EmergencyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
