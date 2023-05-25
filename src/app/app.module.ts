import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModuleImports } from './utils/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { BannerComponent } from './view/components/banner/banner.component';
import { MenuComponent } from './view/home/menu/menu.component';
import { SearchComponent } from './view/components/search/search.component';
import { CategoriesComponent } from './view/components/categories/categories.component';
import { MenuItemComponent } from './view/components/menu-item/menu-item.component';
import { AboutUsComponent } from './view/home/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './view/components/navbar/navbar.component';
import { SidenavComponent } from './view/components/sidenav/sidenav.component';
import { MenuNavigationComponent } from './view/components/menu-navigation/menu-navigation.component';
import { FloatingButtonComponent } from './view/components/floating-button/floating-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    SearchComponent,
    CategoriesComponent,
    MenuItemComponent,
    AboutUsComponent,
    NavbarComponent,
    SidenavComponent,
    MenuNavigationComponent,
    FloatingButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModuleImports,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
