import { Component } from '@angular/core';
import { Link } from 'src/app/pages/single-category/single-category.component';

@Component({
  selector: 'app-sorting-products',
  templateUrl: './sorting-products.component.html',
  styleUrls: ['./sorting-products.component.css']
})
export class SortingProductsComponent {

links: Link[] = [
  {
    name : "COULEURS",
  },
  {
    name : "TAILLE",
  },
  {
    name : "STYLE",
  },
  {
    name : "MATIERE",
  },
  {
    name : "TRIER PAR",
  },
]

}
