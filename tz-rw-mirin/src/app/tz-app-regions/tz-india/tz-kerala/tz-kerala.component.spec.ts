import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzKeralaComponent } from './tz-kerala.component';

describe('TzKeralaComponent', () => {
  let component: TzKeralaComponent;
  let fixture: ComponentFixture<TzKeralaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzKeralaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzKeralaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
