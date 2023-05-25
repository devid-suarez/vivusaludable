import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter();
  searchText: string = "";

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onFocus() {
    this.searchTextChange.emit(this.searchText);
  }

  onBlur() {
    this.searchTextChange.emit(this.searchText);
  }

  textChange(text: string) {
    this.searchTextChange.emit(text);
    const element = document.querySelector('#menu');
    if (element) {
      this.viewportScroller.scrollToAnchor('menu');
      window.scrollBy(0, -60);
    }
  }

  clearSearchText() {
    this.searchText = '';
    this.searchTextChange.emit(this.searchText);
  }

}
