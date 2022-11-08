import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTargetComponent } from './logo-target.component';

describe('LogoTargetComponent', () => {
  let component: LogoTargetComponent;
  let fixture: ComponentFixture<LogoTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
