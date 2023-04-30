import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzAyodhyaComponent } from './tz-ayodhya.component';

describe('TzAyodhyaComponent', () => {
  let component: TzAyodhyaComponent;
  let fixture: ComponentFixture<TzAyodhyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzAyodhyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzAyodhyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
