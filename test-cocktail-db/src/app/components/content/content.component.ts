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
  

  constructor(
    private cocktailsService: CocktailsService
  ) { }

  ngOnInit(): void {
    this.getDrinksCategories();
  }

  getDrinksCategories() {
    this.cocktailsService.getDrinksCategories().subscribe(
      res => {
        this.drinksCategories = res;
      }
    );
  }

  getDrinkByCategory(filtredCategory, category) {
    this.cocktailsService.getDrinksByCategories(filtredCategory).subscribe(
      res => {
        this.drinkByCategory = res;

        const data = {
          name: category,
          value: this.drinkByCategory.drinks
        }
        this.setDrinksList(data);
      }
    );
  }

  setDrinksList(drinks) {
    this.drinksList.push(drinks);
    console.log(this.drinksList)
  }

  checkCheckBoxValue(event) {
    this.drinksList = [];

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

    for (let i = 0; i < this.checkedCategories.length; i++) {
      const category = this.checkedCategories[i];
      const filtredCategory = category.replace(/ /g, '_');
      this.getDrinkByCategory(filtredCategory, category);
    }
  }

}
