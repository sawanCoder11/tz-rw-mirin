import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzCentralamericaComponent } from './tz-centralamerica.component';

describe('TzCentralamericaComponent', () => {
  let component: TzCentralamericaComponent;
  let fixture: ComponentFixture<TzCentralamericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzCentralamericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzCentralamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
