import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { FilterComponent } from './components/content-container/filter/filter.component';
import { ContentComponent } from './components/content-container/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentContainerComponent,
    FilterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
