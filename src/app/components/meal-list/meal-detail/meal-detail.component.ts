import { MealListService } from './../../../services/meal-list.service';
import { DetailModel } from './../../../models/details.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css'],
})
export class MealDetailComponent implements OnInit {
  details!: DetailModel[];
  id!: string;

  constructor(
    private serviceMealList: MealListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.details = [];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.serviceMealList
        .getDetailsAboutMeal(this.id)
        .subscribe((data: DetailModel[]) => {
          this.details = data;
        });
    });
  }
}
