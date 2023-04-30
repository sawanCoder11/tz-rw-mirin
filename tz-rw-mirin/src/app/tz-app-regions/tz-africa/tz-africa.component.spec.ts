import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzAfricaComponent } from './tz-africa.component';

describe('TzAfricaComponent', () => {
  let component: TzAfricaComponent;
  let fixture: ComponentFixture<TzAfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzAfricaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
