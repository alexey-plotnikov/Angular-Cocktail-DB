import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(
    private http: HttpClient
  ) { }

  private drinksCategoriesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  private drinksByCategoriesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  getDrinksCategories() {
    return this.http.get(this.drinksCategoriesUrl, { responseType: 'json' });
  }

  getDrinksByCategories(category) {
    return this.http.get(this.drinksByCategoriesUrl + category, { responseType: 'json' });
  }
}
