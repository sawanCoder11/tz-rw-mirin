import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzMaharashtraComponent } from './tz-maharashtra.component';

describe('TzMaharashtraComponent', () => {
  let component: TzMaharashtraComponent;
  let fixture: ComponentFixture<TzMaharashtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzMaharashtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzMaharashtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
