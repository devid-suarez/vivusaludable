import { Component, OnInit, Input } from '@angular/core';
import { MenuItemInterface } from 'src/app/models/menu-item.interface';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item!: MenuItemInterface;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }
}
