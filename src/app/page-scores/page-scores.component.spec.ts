import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScoresComponent } from './page-scores.component';

describe('PageScoresComponent', () => {
  let component: PageScoresComponent;
  let fixture: ComponentFixture<PageScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
