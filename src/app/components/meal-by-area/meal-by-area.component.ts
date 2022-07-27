import { MealsByAreaService } from './../../services/meals-by-area.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealList } from 'src/app/models/meals-list.model';
import { DetailModel } from '../../models/details.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meal-by-area',
  templateUrl: './meal-by-area.component.html',
  styleUrls: ['./meal-by-area.component.css'],
})
export class MealByAreaComponent implements OnInit {
  mealsArea: MealList[] = [];
  mealsForDisplay: MealList[] = [];
  details: DetailModel[] = [];

  searchForm = this.FormBuilder.group({
    input: [''],
  });

  constructor(
    private mealsByAreaService: MealsByAreaService,
    private routes: ActivatedRoute,
    private route: Router,
    private FormBuilder: FormBuilder
  ) {}

  area: string = this.routes.snapshot.params['area'];

  ngOnInit(): void {
    this.getMeals();
    this.seeDetails;
    this.searchForm.valueChanges.subscribe((el) => {
      return this.searchRes(this.searchForm.value.input);
    });
  }
  seeDetails(id: string) {
    this.route.navigate([id], {
      relativeTo: this.routes,
    });
  }

  getMeals() {
    this.mealsByAreaService
      .getMealsByArea(this.area)
      .subscribe((data: MealList[]) => {
        this.mealsArea = data;
        this.mealsForDisplay = data;
      });
  }

  searchRes(value: string) {
    this.mealsArea = this.mealsForDisplay.filter((el) => {
      let strMealUnder = el.strMeal.toLowerCase();
      let valueUnder = value.toLowerCase();
      return strMealUnder.includes(valueUnder);
    });
  }
}
