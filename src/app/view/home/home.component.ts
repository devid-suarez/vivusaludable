import { Component, Input, OnInit } from '@angular/core';

import { BannerInterface } from 'src/app/models/banner.interface';
import { MenuItemInterface } from 'src/app/models/menu-item.interface';
import { AboutUsInterface } from 'src/app/models/about-us.interface';
import { CompanyInterface } from 'src/app/models/company.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() data: CompanyInterface | undefined;

  banners: BannerInterface[] = [];
  menu: MenuItemInterface[] = [];
  aboutUs?: AboutUsInterface;
  whatsAppNumber: string = "";
  logo : string = "";
  //./assets/logos/logo_white.webp
  constructor() {
  }

  ngOnInit(): void {
    if (this.data) {
      this.logo = this.data.logos[0];
      this.banners = this.data.banners;
      this.menu = this.data.menu;
      this.aboutUs = this.data.aboutUs;
      this.whatsAppNumber = this.data.aboutUs?.whatsappNumber!;
    }
  }
}
