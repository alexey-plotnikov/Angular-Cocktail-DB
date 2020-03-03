import { Component, OnInit } from '@angular/core';

import { CocktailsService } from 'src/app/services/cocktails-service/cocktails.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public drinksCategories;
  public checkedCategories = [];
  public drinkByCategory;
  public drinksList = [];
  public totalAmountOfDrinks = 0;

  constructor(
    private cocktailsService: CocktailsService
  ) { }

  ngOnInit(): void {
    this.getDrinksCategories();
  }

  // get categories list from service
  getDrinksCategories() {
    this.cocktailsService.getDrinksCategories().subscribe(
      res => {
        this.drinksCategories = res;
      }
    );
  }

  // get one category of drink from service
  getDrinkByCategory(filtredCategory, category) {
    this.cocktailsService.getDrinksByCategories(filtredCategory).subscribe(
      res => {
        this.drinkByCategory = res;

        const data = {
          name: category,
          value: this.drinkByCategory.drinks
        };
        this.setDrinksList(data);
      }
    );
  }

  // set list of drinks
  setDrinksList(drinks) {
    this.drinksList.push(drinks);
  }

  checkCheckBoxValue(event) {
    if (event.source.checked) {
      this.checkedCategories.push(event.source.value);
    }

    if (!event.source.checked) {
      for (let i = 0; i < this.checkedCategories.length; i++) {
        if (this.checkedCategories[i] === event.source.value) {
          this.checkedCategories.splice(i, 1);
        }
      }
    }
  }

  // apply checked categories on button click
  applyCategories() {
    this.drinksList = [];

    for (const checkedCategory of this.checkedCategories) {
      const category = checkedCategory;
      const filtredCategory = category.replace(/ /g, '_');
      this.getDrinkByCategory(filtredCategory, category);
    }
  }
}
