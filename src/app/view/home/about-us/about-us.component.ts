import { Component, OnInit, Input } from '@angular/core';
import { AboutUsInterface } from 'src/app/models/about-us.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  @Input() data: AboutUsInterface | undefined;
  @Input() logo: string = "";
  emailPath: string = "";
  email: string = "";
  addressPath: string = "";
  addressUrl: string = "";
  mission: string = "";


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data) {
      this.mission = this.data!.mission;
      this.addressPath = this.data!.address.path;
      this.addressUrl = this.data!.address.url;
      this.email = this.data!.email;
      this.emailPath = `mailto:${this.data!.email}`;

    }

  }

}
