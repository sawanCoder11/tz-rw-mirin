import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzEuropeComponent } from './tz-europe.component';

describe('TzEuropeComponent', () => {
  let component: TzEuropeComponent;
  let fixture: ComponentFixture<TzEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzEuropeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
