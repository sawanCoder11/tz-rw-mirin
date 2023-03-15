import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzCentralasiaComponent } from './tz-centralasia.component';

describe('TzCentralasiaComponent', () => {
  let component: TzCentralasiaComponent;
  let fixture: ComponentFixture<TzCentralasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzCentralasiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzCentralasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
