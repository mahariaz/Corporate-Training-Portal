import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentcourseComponent } from './currentcourse.component';

describe('CurrentcourseComponent', () => {
  let component: CurrentcourseComponent;
  let fixture: ComponentFixture<CurrentcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
