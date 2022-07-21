import { MealListService } from './../../services/meal-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealList } from 'src/app/models/meals-list.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
})
export class MealListComponent implements OnInit {
  meals: MealList[] = [];
  mealsForDisplay: MealList[] = [];

  constructor(
    private routes: ActivatedRoute,
    private MealListService: MealListService,
    private route: Router
  ) {}

  category: string = this.routes.snapshot.params['category'];

  ngOnInit(): void {
    this.MealListService.getMeals(this.category).subscribe(
      (data: MealList[]) => {
        this.meals = data;
        this.mealsForDisplay = data;
      }
    );
  }
  seeDetails(id: string) {
    this.route.navigate([id], {
      relativeTo: this.routes,
    });
  }
}
