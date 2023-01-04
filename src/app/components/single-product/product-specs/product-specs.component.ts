import { Component, Input } from '@angular/core';
import { Product } from 'src/mocks/product-list.mock';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrls: ['./product-specs.component.css']
})
export class ProductSpecsComponent {

  @Input() product!:Product;

  descriptionIsVisible: boolean = false;
  matiereIsVisible: boolean = false;

  showProductDescription() {
      this.descriptionIsVisible = !this.descriptionIsVisible;
  }

  showProductMatiere() {
      this.matiereIsVisible = !this.matiereIsVisible;
  }

}
