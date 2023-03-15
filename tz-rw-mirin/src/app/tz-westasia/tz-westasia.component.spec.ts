import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzWestasiaComponent } from './tz-westasia.component';

describe('TzWestasiaComponent', () => {
  let component: TzWestasiaComponent;
  let fixture: ComponentFixture<TzWestasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzWestasiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzWestasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
