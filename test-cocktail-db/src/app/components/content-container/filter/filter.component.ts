import { Component, OnInit } from '@angular/core';

import { CocktailsService } from 'src/app/services/cocktails-service/cocktails.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public drinksCategories;

  constructor(
    private cocktailsService: CocktailsService
  ) {}

  ngOnInit(): void {
    this.getDrinksCategories();
  }

  getDrinksCategories() {
    this.cocktailsService.getDrinksCategories().subscribe(
      data => {
        this.drinksCategories = data;
        console.log(this.drinksCategories.drinks)
      }
    )
  }

}
