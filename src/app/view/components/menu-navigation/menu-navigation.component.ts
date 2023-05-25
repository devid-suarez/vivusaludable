import { Component, Output,EventEmitter } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.css']
})
export class MenuNavigationComponent   {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor(private viewportScroller: ViewportScroller) { }


  goToSection(sectionId: string) {
    const element = document.querySelector('#' + sectionId);
    if (element) {
      this.viewportScroller.scrollToAnchor(sectionId);
      if (sectionId != "about-us" || window.innerWidth < 576) {
        window.scrollBy(0, -60);
      }
    }
    this.closeSidenav.emit();
  }

}
