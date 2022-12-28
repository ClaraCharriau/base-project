import { Component } from '@angular/core';

interface ProductImage {
  alternativetext: string;
  photoone: string;
  phototwo: string;
  photothree: string;
  photofour: string;
}

@Component({
  selector: 'app-product-photos',
  templateUrl: './product-photos.component.html',
  styleUrls: ['./product-photos.component.css']
})
export class ProductPhotosComponent {

  pullImage: ProductImage = {
    alternativetext: "Pull femme",
    photoone: "./assets/products-images/pull-femme-blanc/pull_blanc_01.png",
    phototwo: "./assets/products-images/pull-femme-blanc/pull_blanc_02.png",
    photothree: "./assets/products-images/pull-femme-blanc/pull_blanc_03.png",
    photofour: "./assets/products-images/pull-femme-blanc/pull_blanc_04.png",
  };

  image: any = this.pullImage.photoone;

  firstPhoto() {
    this.image = this.pullImage.photoone;
  }

  secondPhoto() {
    this.image = this.pullImage.phototwo;
  }

  thirdPhoto() {
    this.image = this.pullImage.photothree;
  }

  fourthPhoto() {
    this.image = this.pullImage.photofour;
  }


}
