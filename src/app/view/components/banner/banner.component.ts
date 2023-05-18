import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/banners/imagen_1.jpg',
    'assets/banners/imagen_2.jpg',
  ];
  currentIndex: number = 0;
  titles: string[] = ['Título 1', 'Título 2', 'Título 3'];
  subtitles: string[] = ['Subtítulo 1', 'Subtítulo 2', 'Subtítulo 3'];

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
}
