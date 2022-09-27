import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemebtnComponent } from './themebtn.component';

describe('ThemebtnComponent', () => {
  let component: ThemebtnComponent;
  let fixture: ComponentFixture<ThemebtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemebtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
