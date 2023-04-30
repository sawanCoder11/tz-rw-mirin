import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzCanadaComponent } from './tz-canada.component';

describe('TzCanadaComponent', () => {
  let component: TzCanadaComponent;
  let fixture: ComponentFixture<TzCanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzCanadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
