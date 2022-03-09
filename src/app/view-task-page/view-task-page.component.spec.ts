import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskPageComponent } from './view-task-page.component';

describe('ViewTaskPageComponent', () => {
  let component: ViewTaskPageComponent;
  let fixture: ComponentFixture<ViewTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
