import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmniSistemComponent } from './alarmni-sistem.component';

describe('AlarmniSistemComponent', () => {
  let component: AlarmniSistemComponent;
  let fixture: ComponentFixture<AlarmniSistemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmniSistemComponent]
    });
    fixture = TestBed.createComponent(AlarmniSistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
