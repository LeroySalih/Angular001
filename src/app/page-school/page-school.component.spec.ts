import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSchoolComponent } from './page-school.component';

describe('PageSchoolComponent', () => {
  let component: PageSchoolComponent;
  let fixture: ComponentFixture<PageSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
