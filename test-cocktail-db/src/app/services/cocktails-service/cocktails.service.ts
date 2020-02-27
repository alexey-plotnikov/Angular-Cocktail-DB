import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(
    private http: HttpClient
  ) { }

  private drinksCategoriesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

  getDrinksCategories() {

    return this.http.get(this.drinksCategoriesUrl, {responseType: 'json'});

  }
}
