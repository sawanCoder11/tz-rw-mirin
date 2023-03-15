import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzSouthamericaComponent } from './tz-southamerica.component';

describe('TzSouthamericaComponent', () => {
  let component: TzSouthamericaComponent;
  let fixture: ComponentFixture<TzSouthamericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzSouthamericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzSouthamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
