import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzChinaComponent } from './tz-china.component';

describe('TzChinaComponent', () => {
  let component: TzChinaComponent;
  let fixture: ComponentFixture<TzChinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzChinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
