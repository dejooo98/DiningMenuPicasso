import { MenuService } from '../../services/menu-service.service';
import { Component, OnInit } from '@angular/core';
import { NationalMeal } from 'src/app/models/food-by-national.model';
import { CategoryMeal } from 'src/app/models/food-category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  categories: CategoryMeal[] = [];
  national: NationalMeal[] = [];
  statement: boolean = false;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.getMealsByCategoryClick();
  }
  getMealsByAreaClick() {
    this.statement = true;
    this.categories = [];
    this.menuService.getMealByArea().subscribe((meal: NationalMeal[]) => {
      this.national = meal;
    });
  }

  getMealsByCategoryClick() {
    this.statement = false;
    this.national = [];
    this.menuService.getMealByCategory().subscribe((meal: CategoryMeal[]) => {
      this.categories = meal;
    });
  }
  chooseCategory(category: string) {
    this.router.navigate(['/menu/category/' + category]);
  }

  chooseArea(area: string) {
    this.router.navigate(['/menu/area/' + area]);
  }
}
