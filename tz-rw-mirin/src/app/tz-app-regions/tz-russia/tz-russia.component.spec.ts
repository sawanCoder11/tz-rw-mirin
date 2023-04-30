import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzRussiaComponent } from './tz-russia.component';

describe('TzRussiaComponent', () => {
  let component: TzRussiaComponent;
  let fixture: ComponentFixture<TzRussiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzRussiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzRussiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
