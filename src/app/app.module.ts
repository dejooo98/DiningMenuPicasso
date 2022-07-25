import { MealByAreaComponent } from './components/meal-by-area/meal-by-area.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { AllMealsComponent } from './components/all-meals/all-meals.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealDetailComponent } from './components/meal-list/meal-detail/meal-detail.component';
import { MealByAreaDetailComponent } from './components/meal-by-area/meal-by-area-detail/meal-by-area-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AboutPageComponent,
    NavigationComponent,
    MenuPageComponent,
    FooterComponent,
    AllMealsComponent,
    MealListComponent,
    MealDetailComponent,
    MealByAreaComponent,
    MealByAreaDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
