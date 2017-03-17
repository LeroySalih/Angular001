import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarLevelTypeComponent } from './star-level-type.component';

describe('StarLevelTypeComponent', () => {
  let component: StarLevelTypeComponent;
  let fixture: ComponentFixture<StarLevelTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarLevelTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarLevelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
