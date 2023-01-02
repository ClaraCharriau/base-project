import { Component } from '@angular/core';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrls: ['./product-specs.component.css']
})
export class ProductSpecsComponent {

  descriptionIsVisible: boolean = false;
  matiereIsVisible: boolean = false;

  showProductDescription() {
      this.descriptionIsVisible = !this.descriptionIsVisible;
  }

  showProductMatiere() {
      this.matiereIsVisible = !this.matiereIsVisible;
  }

}
