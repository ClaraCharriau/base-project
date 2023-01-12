import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  // Récupérer le contenant du carousel...
  // carouselSlider = this.document.querySelector('.cache-carousel-two') as HTMLElement;
  //carouselSlider: HTMLElement = this.document.getElementById('cache-carousel-two');


  @ViewChild('cache', { static: false }) carouselSlider!: HTMLDivElement;

  ngAfterViewInit() {
    this.carouselSlider;
  }

// Prendre la longueur d'un élément du carousel
itemWidth: number = 150;

slideToLeft() {
  this.carouselSlider.scrollBy({
    left: this.itemWidth,
    behavior: 'smooth',
  });
}

slideToRight() {
  this.carouselSlider.scrollBy({
    left: -this.itemWidth,
    behavior: 'smooth',
  });
}



}
