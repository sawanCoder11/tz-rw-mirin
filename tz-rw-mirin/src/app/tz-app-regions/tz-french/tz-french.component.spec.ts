import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzFrenchComponent } from './tz-french.component';

describe('TzFrenchComponent', () => {
  let component: TzFrenchComponent;
  let fixture: ComponentFixture<TzFrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzFrenchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzFrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
