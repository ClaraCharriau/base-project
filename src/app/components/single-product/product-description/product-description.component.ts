import { Component, Input } from '@angular/core';
import { Product } from 'src/mocks/product-list.mock';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  @Input() product!:Product;


}
