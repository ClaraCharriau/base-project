import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products/products.service';
import { Product } from 'src/mocks/product-list.mock';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
  ) { }

  ngOnInit() {
    this.getProductById();
  }

  getProductById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundProduct = this.productService.getProductById(id);

    if (foundProduct) {
      this.product = foundProduct;
    } else {
      this.router.navigate(['/']);
    }

  }

};
