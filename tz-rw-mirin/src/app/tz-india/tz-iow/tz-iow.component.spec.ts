import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzIowComponent } from './tz-iow.component';

describe('TzIowComponent', () => {
  let component: TzIowComponent;
  let fixture: ComponentFixture<TzIowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzIowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzIowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
