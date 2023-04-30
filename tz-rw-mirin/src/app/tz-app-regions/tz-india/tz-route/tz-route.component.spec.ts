import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzRouteComponent } from './tz-route.component';

describe('TzRouteComponent', () => {
  let component: TzRouteComponent;
  let fixture: ComponentFixture<TzRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
