import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzTamilnaduComponent } from './tz-tamilnadu.component';

describe('TzTamilnaduComponent', () => {
  let component: TzTamilnaduComponent;
  let fixture: ComponentFixture<TzTamilnaduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzTamilnaduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzTamilnaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
