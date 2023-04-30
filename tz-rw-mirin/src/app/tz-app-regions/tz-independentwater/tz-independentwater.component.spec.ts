import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzIndependentwaterComponent } from './tz-independentwater.component';

describe('TzIndependentwaterComponent', () => {
  let component: TzIndependentwaterComponent;
  let fixture: ComponentFixture<TzIndependentwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzIndependentwaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzIndependentwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
