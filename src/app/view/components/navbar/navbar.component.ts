import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() openSidenav = new EventEmitter<void>();
  isSmallScreen = true;
  logoClicked() {
  }

  onClickMenu() {
    this.openSidenav.emit();
  }
  // ngAfterViewInit() {
  //   this.sidenav.closedStart.subscribe(() => {
  //     this.sidenavOpened = false;
  //   });
  // }
}
