import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzUSAComponent } from './tz-usa.component';

describe('TzUSAComponent', () => {
  let component: TzUSAComponent;
  let fixture: ComponentFixture<TzUSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzUSAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzUSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
