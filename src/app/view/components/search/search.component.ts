import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter();

  searchText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onFocus() {
    this.searchTextChange.emit(this.searchText);
  }

  onBlur() {
    this.searchTextChange.emit(this.searchText);
  }

  clearSearchText() {
    this.searchText = '';
    this.searchTextChange.emit(this.searchText);
  }

}
