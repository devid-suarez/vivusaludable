import { Component, Input } from '@angular/core';
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
    { id: 1, name: 'Entrada' },
    { id: 2, name: 'Bebidas' },
    { id: 3, name: 'Jugos' },
  ];

  items: MenuItemInterface[] = [
    { id: 1, price: 500, name: 'bandeja paisa', description: 'muchas cosas', ingredients: "", category: { id: 1, name: "" } },
    { id: 2, price: 500, name: 'sopa de pajarilla', description: 'muchas cosas', ingredients: "", category: { id: 2, name: "" } },
    { id: 3, price: 500, name: 'pastas', description: 'muchas cosas', ingredients: "", category: { id: 3, name: "" } },
  ];

  filteredItems = this.items;

  onSearchText(text: string) {
    this.searchText = text;
    this.filterMenuItems({ text: text, category: this.selectedCategory });
  }

  onSelectedCategory(category: CategoryInterface) {
    this.selectedCategory = category;
    this.filterMenuItems({ text: this.searchText, category: category });
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
  const text = searchValues.text;
  const category = searchValues.category;

  if (typeof value != 'object') {
    return value.toString().includes(text) && (!category || item.category.id === category.id);
  }

  return Object.values(value).some(innerValue => {
    if (typeof innerValue != 'string' && typeof innerValue != 'number') {
      return false
    }

    return innerValue.toString().includes(text) && (!category || item.category.id === category.id);;
  });
}
