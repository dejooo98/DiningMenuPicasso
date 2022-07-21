import { MealsByAreaService } from './../../services/meals-by-area.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meal-by-area',
  templateUrl: './meal-by-area.component.html',
  styleUrls: ['./meal-by-area.component.css'],
})
export class MealByAreaComponent implements OnInit {
  constructor(
    private mealsByAreaService: MealsByAreaService,
    private routes: ActivatedRoute,
    private route: Router
  ) {}

  area: string = this.routes.snapshot.params['area'];

  ngOnInit(): void {}
}
