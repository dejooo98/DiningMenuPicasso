import { AllCategService } from '../../services/all-categ.service';
import { AllCategModel } from '../../models/all-categ.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css'],
})
export class AllCategoriesComponent implements OnInit {
  allCategories: AllCategModel[] = [];
  allCategoriesEdit: AllCategModel[] = [];

  constructor(
    private AllCategService: AllCategService,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.seeDetails;
  }

  seeDetails(id: number) {
    this.router.navigate([id], {
      relativeTo: this.routes,
    });
  }

  getCategories() {
    this.AllCategService.getAllCategories().subscribe(
      (data: AllCategModel[]) => {
        this.allCategories = data;
        this.allCategoriesEdit = data;
      }
    );
  }
}
