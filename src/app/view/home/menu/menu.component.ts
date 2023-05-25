import { Component, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CategoryInterface } from 'src/app/models/category.inteface';
import { MenuItemInterface } from 'src/app/models/menu-item.interface';

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

  categories: CategoryInterface[] = [
    { id: 0, name: "Todo" },
    { id: 1, name: 'Carnes' },
    { id: 2, name: 'Entradas' },
    { id: 3, name: 'Jugos' }
  ];

  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

  items: MenuItemInterface[] = [
    { id: 1, price: 15000, name: 'Cebolla apanada', description: this.description, ingredients: "", category: { id: 2, name: "" }, imagePath: "./assets/menu/cebolla.png"},
    { id: 2, price: 20000, name: 'Costillitas de res', description: this.description, ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/costilla.png" },
    { id: 3, price: 8000, name: 'Limonada de coco', description: this.description, ingredients: "", category: { id: 3, name: "" }, imagePath: "./assets/menu/jugo.png" },
    { id: 4, price: 25000, name: 'Nuguets de pollo', description: this.description, ingredients: "", category: { id: 2, name: "" }, imagePath: "./assets/menu/nuguet.png" },
    { id: 5, price: 22000, name: 'Sandwich', description: this.description, ingredients: "", category: { id: 1, name: "" }, imagePath: "./assets/menu/sandwich.png" },
  ];

  filteredItems = this.items;

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
