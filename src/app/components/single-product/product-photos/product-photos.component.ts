import { Component, Input } from '@angular/core';
import { Product } from 'src/mocks/product-list.mock';

@Component({
  selector: 'app-product-photos',
  templateUrl: './product-photos.component.html',
  styleUrls: ['./product-photos.component.css']
})
export class ProductPhotosComponent {

@Input() product!:Product;

 

  image: any = this.product.photoOne;

  firstPhoto() {
    this.image = this.product.photoOne;
  }

  secondPhoto() {
    this.image = this.product.photoTwo;
  }

  thirdPhoto() {
    this.image = this.product.photoThree;
  }

  fourthPhoto() {
    this.image = this.product.photoFour;
  }


}
