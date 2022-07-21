import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealByAreaComponent } from './meal-by-area.component';

describe('MealByAreaComponent', () => {
  let component: MealByAreaComponent;
  let fixture: ComponentFixture<MealByAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealByAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
