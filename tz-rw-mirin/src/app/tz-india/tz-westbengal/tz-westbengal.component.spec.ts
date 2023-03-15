import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzWestbengalComponent } from './tz-westbengal.component';

describe('TzWestbengalComponent', () => {
  let component: TzWestbengalComponent;
  let fixture: ComponentFixture<TzWestbengalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzWestbengalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzWestbengalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
