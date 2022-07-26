import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DetailModel } from '../models/details.model';
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
  getDetails(id: string): Observable<DetailModel[]> {
    return this.http
      .get<{ meals: DetailModel[] }>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(map((response) => response.meals));
  }
}
