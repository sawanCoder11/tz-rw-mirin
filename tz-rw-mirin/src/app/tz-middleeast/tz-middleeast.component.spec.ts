import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzMiddleeastComponent } from './tz-middleeast.component';

describe('TzMiddleeastComponent', () => {
  let component: TzMiddleeastComponent;
  let fixture: ComponentFixture<TzMiddleeastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzMiddleeastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzMiddleeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
