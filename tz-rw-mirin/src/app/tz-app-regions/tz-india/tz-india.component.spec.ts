import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzIndiaComponent } from './tz-india.component';

describe('TzIndiaComponent', () => {
  let component: TzIndiaComponent;
  let fixture: ComponentFixture<TzIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzIndiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
