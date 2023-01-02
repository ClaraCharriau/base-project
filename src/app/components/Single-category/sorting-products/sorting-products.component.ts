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
    favicon : "assets/sorting-products/nav_filtre_catégorie.png",
  },
  {
    name : "TAILLE",
    favicon : "assets/sorting-products/nav_filtre_catégorie.png",
  },
  {
    name : "STYLE",
    favicon : "assets/sorting-products/nav_filtre_catégorie.png",
  },
  {
    name : "MATIERE",
    favicon : "assets/sorting-products/nav_filtre_catégorie.png",
  },
  {
    name : "TRIER PAR",
    favicon : "assets/sorting-products/nav_filtre_catégorie.png",
  },
]
}
