import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {

  @Input() whatsAppNumber: string = "";
  whatsAppPath: string = "";

  ngOnInit(): void {
    // this.whatsAppNumber = this.whatsAppNumber.replace(/\s/g, "");
    // console.log(`https://wa.me/${    this.whatsAppNumber}`);
    
    this.whatsAppPath = `https://wa.me/${this.whatsAppNumber.replace(/\s/g, "")}`;
  }

}
