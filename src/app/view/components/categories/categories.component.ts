
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryInterface } from 'src/app/models/category.inteface';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: CategoryInterface[] = [];
  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();
  selectedIndex = -1;

  ngOnInit(): void {
  }

  selectCategory(index: number, category: CategoryInterface) {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
      this.selectedCategory.emit(null);
    } else {
      this.selectedIndex = index;
      this.selectedCategory.emit(category);
    }
  }
}