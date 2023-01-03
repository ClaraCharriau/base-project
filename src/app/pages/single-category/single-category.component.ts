import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products/products.service';
import { Product } from 'src/mocks/product-list.mock';

export interface Link {
  name: string;
  favicon: string;
}
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {
  @Input() links!: Link[];

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
  ) { }

  ngOnInit() {
    this.getProductByCategory();
  }

  getProductByCategory() {
    const category = this.route.snapshot.paramMap.get('category');
    const foundProduct = this.productService.getProductByCategory(category);

    if (foundProduct) {
      this.product = foundProduct;
    } else {
      this.router.navigate(['/']);
    }

  }
