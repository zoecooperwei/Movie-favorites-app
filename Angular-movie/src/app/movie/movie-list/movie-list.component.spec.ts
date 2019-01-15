import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { movieListComponent } from './movie-list.component';

describe('movieListComponent', () => {
  let component: movieListComponent;
  let fixture: ComponentFixture<movieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ movieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
