import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
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
import { HammerModule } from '@angular/platform-browser';
import { HammerConfig } from './utils/hammer-config.module';

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
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
