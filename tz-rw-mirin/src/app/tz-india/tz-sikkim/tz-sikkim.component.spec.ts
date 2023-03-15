import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzSikkimComponent } from './tz-sikkim.component';

describe('TzSikkimComponent', () => {
  let component: TzSikkimComponent;
  let fixture: ComponentFixture<TzSikkimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzSikkimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzSikkimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
