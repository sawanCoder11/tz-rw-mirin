import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzAndhraComponent } from './tz-andhra.component';

describe('TzAndhraComponent', () => {
  let component: TzAndhraComponent;
  let fixture: ComponentFixture<TzAndhraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzAndhraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzAndhraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
