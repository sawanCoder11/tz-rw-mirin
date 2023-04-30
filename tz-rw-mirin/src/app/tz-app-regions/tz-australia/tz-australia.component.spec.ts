import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzAustraliaComponent } from './tz-australia.component';

describe('TzAustraliaComponent', () => {
  let component: TzAustraliaComponent;
  let fixture: ComponentFixture<TzAustraliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzAustraliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
