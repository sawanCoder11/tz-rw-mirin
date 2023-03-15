import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzAsiaComponent } from './tz-asia.component';

describe('TzAsiaComponent', () => {
  let component: TzAsiaComponent;
  let fixture: ComponentFixture<TzAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzAsiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
