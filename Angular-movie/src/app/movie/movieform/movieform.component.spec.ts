import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { movieformComponent } from './movieform.component';

describe('movieformComponent', () => {
  let component: movieformComponent;
  let fixture: ComponentFixture<movieformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ movieformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
