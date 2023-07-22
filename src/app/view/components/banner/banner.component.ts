import { Component, OnInit, Input } from '@angular/core';
import { BannerInterface } from 'src/app/models/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() banners: BannerInterface[] = [];

  images: string[] = [
    'assets/banners/vivu/banner_1.webp',
  ];
  currentIndex: number = 0;
  titles: string[] = ['', '', ''];
  subtitles: string[] = ['', '', ''];



  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();
    }, 15000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  handleSwipe(event: any) {
    const x = Math.abs(event.deltaX);
    const y = Math.abs(event.deltaY);

    if (x > y) {
      this.passSlide(event.deltaX);
    }
  }

  passSlide = (deltaX: number) => {
    if (deltaX > 0) {
      this.previousImage()
    } else {
      this.nextImage();
    }
  }
}
