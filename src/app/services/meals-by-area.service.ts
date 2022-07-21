import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DetailAboutModel } from '../models/detail-about.model';
import { MealList } from '../models/meals-list.model';

@Injectable({
  providedIn: 'root',
})
export class MealsByAreaService {
  constructor(private http: HttpClient) {}

  getMealsByArea(area: string): Observable<MealList[]> {
    return this.http
      .get<{ meals: MealList[] }>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      )
      .pipe(map((response) => response.meals));
  }
  getDetails(id: string): Observable<DetailAboutModel[]> {
    return this.http
      .get<{ meals: DetailAboutModel[] }>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(map((response) => response.meals));
  }
}
