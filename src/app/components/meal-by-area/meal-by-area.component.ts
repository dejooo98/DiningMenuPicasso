import { MealsByAreaService } from './../../services/meals-by-area.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealList } from 'src/app/models/meals-list.model';
import { DetailAboutModel } from '../../models/detail-about.model';

@Component({
  selector: 'app-meal-by-area',
  templateUrl: './meal-by-area.component.html',
  styleUrls: ['./meal-by-area.component.css'],
})
export class MealByAreaComponent implements OnInit {
  mealsArea: MealList[] = [];
  mealsForDisplay: MealList[] = [];
  statement: boolean = false;
  id!: number;
  details: DetailAboutModel[] = [];

  constructor(
    private mealsByAreaService: MealsByAreaService,
    private routes: ActivatedRoute,
    private route: Router
  ) {}

  area: string = this.routes.snapshot.params['area'];

  ngOnInit(): void {
    this.getMeals();
    this.seeDetails;
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
}
