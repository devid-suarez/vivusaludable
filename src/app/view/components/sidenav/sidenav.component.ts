import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidenavOpened = false;

  onSidenavOpenedChange(opened: boolean) {
    document.body.style.overflowY = opened ? 'hidden' : 'auto';
  }

  openSidenav() {
    this.sidenavOpened = true;
  }

  closeSidenav() {
    this.sidenavOpened = false;
  }
}
