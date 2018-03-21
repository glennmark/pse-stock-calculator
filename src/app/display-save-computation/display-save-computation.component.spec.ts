import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySaveComputationComponent } from './display-save-computation.component';

describe('DisplaySaveComputationComponent', () => {
  let component: DisplaySaveComputationComponent;
  let fixture: ComponentFixture<DisplaySaveComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySaveComputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySaveComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
