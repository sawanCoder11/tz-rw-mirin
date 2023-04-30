import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzOdishaComponent } from './tz-odisha.component';

describe('TzOdishaComponent', () => {
  let component: TzOdishaComponent;
  let fixture: ComponentFixture<TzOdishaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzOdishaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzOdishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
