import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Data } from 'src/app/utils/data.utils';
import { CompanyInterface } from 'src/app/models/company.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidenavOpened = false;
  data: CompanyInterface | undefined;
  logo: string = "";
  constructor() {
    if (environment.company && Data) {
      this.data = Data.COMPANIES[environment.company];
      // console.log(2,this.data)
      this.logo = Data.COMPANIES[environment.company].logos[0];
    }
  }
  ngOnInit(): void {
    console.log(this.data)
  }


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
