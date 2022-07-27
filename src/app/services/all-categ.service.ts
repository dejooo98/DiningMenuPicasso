import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { AllCategModel } from '../models/all-categ.model';

@Injectable({
  providedIn: 'root',
})
export class AllCategService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<AllCategModel[]> {
    return this.http
      .get<{ categories: AllCategModel[] }>(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      )
      .pipe(map((response) => response.categories));
  }
}
