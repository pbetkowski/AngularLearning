import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneTaskComponent } from './tone-task.component';

describe('ToneTaskComponent', () => {
  let component: ToneTaskComponent;
  let fixture: ComponentFixture<ToneTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
