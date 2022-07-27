import { AllCategService } from './../../../services/all-categ.service';
import { AllCategModel } from './../../../models/all-categ.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-all-categories-detail',
  templateUrl: './all-categories-detail.component.html',
  styleUrls: ['./all-categories-detail.component.css'],
})
export class AllCategoriesDetailComponent implements OnInit {
  details!: AllCategModel[];
  id!: string;

  constructor(
    private allCategService: AllCategService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.details = [];
    this.routes.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.allCategService
        .getAllCategories()
        .subscribe((data: AllCategModel[]) => {
          this.details = data;
        });
    });
  }
}
