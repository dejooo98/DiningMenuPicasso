import { MealListService } from './../../services/meal-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealList } from 'src/app/models/meals-list.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
})
export class MealListComponent implements OnInit {
  meals: MealList[] = [];
  mealsForDisplay: MealList[] = [];
  searchForm = this.formBuilder.group({
    input: [''],
  });

  constructor(
    private MealListService: MealListService,
    private routes: ActivatedRoute,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  category: string = this.routes.snapshot.params['category'];

  ngOnInit(): void {
    this.MealListService.getMeals(this.category).subscribe(
      (data: MealList[]) => {
        this.meals = data;
        this.mealsForDisplay = data;
      }
    );
    this.searchForm.valueChanges.subscribe((el) => {
      return this.searchRes(this.searchForm.value.input);
    });
  }

  searchRes(value: string) {
    this.meals = this.mealsForDisplay.filter((el) => {
      let strMealUnder = el.strMeal.toLowerCase();
      let valueUnder = value.toLowerCase();
      return strMealUnder.includes(valueUnder);
    });
  }

  seeDetails(id: string) {
    this.route.navigate([id], {
      relativeTo: this.routes,
    });
  }
}
