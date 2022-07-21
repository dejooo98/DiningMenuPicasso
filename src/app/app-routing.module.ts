import { MealListComponent } from './components/meal-list/meal-list.component';
import { AllMealsComponent } from './components/all-meals/all-meals.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MealByAreaComponent } from './components/meal-by-area/meal-by-area.component';

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
  },
  {
    path: 'menu/area/:area',
    component: MealByAreaComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'all-meals',
    component: AllMealsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
