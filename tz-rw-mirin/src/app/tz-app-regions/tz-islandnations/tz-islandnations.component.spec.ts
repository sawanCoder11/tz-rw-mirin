import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzIslandnationsComponent } from './tz-islandnations.component';

describe('TzIslandnationsComponent', () => {
  let component: TzIslandnationsComponent;
  let fixture: ComponentFixture<TzIslandnationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzIslandnationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TzIslandnationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
