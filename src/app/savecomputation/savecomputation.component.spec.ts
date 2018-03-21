import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavecomputationComponent } from './savecomputation.component';

describe('SavecomputationComponent', () => {
  let component: SavecomputationComponent;
  let fixture: ComponentFixture<SavecomputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavecomputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavecomputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
