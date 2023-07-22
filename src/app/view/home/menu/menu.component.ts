import { Component, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CategoryInterface } from 'src/app/models/category.inteface';
import { MenuItemInterface } from 'src/app/models/menu-item.interface';
import { environment } from 'src/environments/environment';
import { Data } from 'src/app/utils/data.utils';

interface searchValues {
  text: string,
  category: CategoryInterface,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() selectedCategory!: CategoryInterface;
  @Input() searchText: string = "";
  @Input() items: MenuItemInterface[] = [];

  categories: CategoryInterface[] = [];

  filteredItems = this.items;

  constructor() {
    console.log(environment.company);
    this.categories = Data.COMPANIES[environment.company].categories;
    this.items = Data.COMPANIES[environment.company].menu;

  };

  onSearchText(text: string) {
    this.searchText = text;
    this.filterMenuItems({ text: text, category: this.selectedCategory });
  }

  onSelectedCategory(event: MatTabChangeEvent) {
    console.log(event);

    this.selectedCategory = this.categories[event.index];
    this.filterMenuItems({ text: this.searchText, category: this.categories[event.index] });
  }

  filterMenuItems(searchValues: searchValues) {
    this.filteredItems = this.items.filter(item => filterValues(item, searchValues));
  }
}

const filterValues = (item: MenuItemInterface, searchValues: searchValues) => {
  const values = Object.values(item);
  return values.some(value => hasMatchValues(value, item, searchValues))
};

const hasMatchValues = (value: any, item: MenuItemInterface, searchValues: searchValues) => {
  console.log(searchValues.category)
  const text = searchValues.text.toLowerCase();
  const category = searchValues.category;

  if (typeof value != 'object') {
    return value.toString().toLowerCase().includes(text) && (!category || item.category.id === category.id || category.id === 0);
  }

  return Object.values(value).some(innerValue => {
    if (typeof innerValue != 'string' && typeof innerValue != 'number') {
      return false
    }

    return innerValue.toString().includes(text) && (!category || item.category.id === category.id || category.id === 0);
  });
}
