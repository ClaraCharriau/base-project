import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, PRODUCTLIST } from 'src/mocks/product-list.mock';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  productList: Product[] = PRODUCTLIST;

  category = this.route.snapshot.paramMap.get('category');

  constructor(
    private route: ActivatedRoute,
  ) { }


}
