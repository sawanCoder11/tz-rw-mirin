import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzCaribbeanComponent } from './tz-caribbean.component';

describe('TzCaribbeanComponent', () => {
  let component: TzCaribbeanComponent;
  let fixture: ComponentFixture<TzCaribbeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzCaribbeanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzCaribbeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
