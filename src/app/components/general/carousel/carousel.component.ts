import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  ngOnInit() {
    this.carouselAnimate();
  }

  carouselAnimate() {
    const productContainers = document.querySelectorAll('.carousel-product-container');
    const productContainersArray =
      Array.prototype.slice.call(productContainers);
    const nxtBtn = document.querySelectorAll('.next-btn');
    const nxtBtnArray = Array.prototype.slice.call(nxtBtn);
    const preBtn = document.querySelectorAll('.previous-btn');
    const preBtnArray = Array.prototype.slice.call(preBtn);

    productContainersArray.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width / 2;
      nxtBtnArray[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });

      preBtnArray[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
    });

  }

}
