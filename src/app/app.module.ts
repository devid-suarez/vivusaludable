import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { BannerComponent } from './view/components/banner/banner.component';
import { MenuComponent } from './view/home/menu/menu.component';
import { SearchComponent } from './view/components/search/search.component';
import { CategoriesComponent } from './view/components/categories/categories.component';
import { MenuItemComponent } from './view/components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    SearchComponent,
    CategoriesComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
