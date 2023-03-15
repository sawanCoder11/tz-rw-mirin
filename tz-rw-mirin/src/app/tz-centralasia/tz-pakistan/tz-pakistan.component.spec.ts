import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzPakistanComponent } from './tz-pakistan.component';

describe('TzPakistanComponent', () => {
  let component: TzPakistanComponent;
  let fixture: ComponentFixture<TzPakistanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzPakistanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzPakistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
