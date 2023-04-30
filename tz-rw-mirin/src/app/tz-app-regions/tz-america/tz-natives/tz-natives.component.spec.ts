import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzNativesComponent } from './tz-natives.component';

describe('TzNativesComponent', () => {
  let component: TzNativesComponent;
  let fixture: ComponentFixture<TzNativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzNativesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzNativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
