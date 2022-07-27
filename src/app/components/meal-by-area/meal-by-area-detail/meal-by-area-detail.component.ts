import { MealsByAreaService } from './../../../services/meals-by-area.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailModel } from 'src/app/models/details.model';

@Component({
  selector: 'app-meal-by-area-detail',
  templateUrl: './meal-by-area-detail.component.html',
  styleUrls: ['./meal-by-area-detail.component.css'],
})
export class MealByAreaDetailComponent implements OnInit {
  details!: DetailModel[];
  id!: string;

  constructor(
    private serviceMealByArea: MealsByAreaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.details = [];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.serviceMealByArea
        .getDetails(this.id)
        .subscribe((data: DetailModel[]) => {
          this.details = data;
        });
    });
  }
}
