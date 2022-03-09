import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTaskPageComponent } from './assign-task-page.component';

describe('AssignTaskPageComponent', () => {
  let component: AssignTaskPageComponent;
  let fixture: ComponentFixture<AssignTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTaskPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
