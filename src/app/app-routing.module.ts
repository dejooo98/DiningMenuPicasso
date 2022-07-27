import { AllCategoriesDetailComponent } from './components/all-categories/all-categories-detail/all-categories-detail.component';
import { MealByAreaDetailComponent } from './components/meal-by-area/meal-by-area-detail/meal-by-area-detail.component';
import { MealDetailComponent } from './components/meal-list/meal-detail/meal-detail.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MealByAreaComponent } from './components/meal-by-area/meal-by-area.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'menu',
    component: MenuPageComponent,
  },
  {
    path: 'menu/category/:category',
    component: MealListComponent,
    children: [{ path: ':id', component: MealDetailComponent }],
  },
  {
    path: 'menu/area/:area',
    component: MealByAreaComponent,
    children: [{ path: ':id', component: MealByAreaDetailComponent }],
  },
  {
    path: 'all-categories',
    component: AllCategoriesComponent,
    children: [{ path: ':id', component: AllCategoriesDetailComponent }],
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
