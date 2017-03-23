import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSchoolAdminComponent } from './page-school-admin.component';

describe('PageSchoolAdminComponent', () => {
  let component: PageSchoolAdminComponent;
  let fixture: ComponentFixture<PageSchoolAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSchoolAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
