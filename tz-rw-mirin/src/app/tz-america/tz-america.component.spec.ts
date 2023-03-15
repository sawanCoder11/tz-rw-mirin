import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzAmericaComponent } from './tz-america.component';

describe('TzAmericaComponent', () => {
  let component: TzAmericaComponent;
  let fixture: ComponentFixture<TzAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzAmericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
