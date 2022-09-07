import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxComponent } from './redux.component';

describe('ReduxComponent', () => {
  let component: ReduxComponent;
  let fixture: ComponentFixture<ReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
