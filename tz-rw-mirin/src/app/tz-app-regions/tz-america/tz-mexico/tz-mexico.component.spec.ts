import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzMexicoComponent } from './tz-mexico.component';

describe('TzMexicoComponent', () => {
  let component: TzMexicoComponent;
  let fixture: ComponentFixture<TzMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzMexicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
