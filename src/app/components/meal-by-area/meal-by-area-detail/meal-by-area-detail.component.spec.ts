import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealByAreaDetailComponent } from './meal-by-area-detail.component';

describe('MealByAreaDetailComponent', () => {
  let component: MealByAreaDetailComponent;
  let fixture: ComponentFixture<MealByAreaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealByAreaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealByAreaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
