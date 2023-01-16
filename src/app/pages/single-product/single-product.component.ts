import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products/products.service';
import { RecentlyConsultedService } from 'src/app/service/RecentlyConsulted/recently-consulted.service';
import { Product, PRODUCTLIST } from 'src/mocks/product-list.mock';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})



export class SingleProductComponent {

  product?: Product;
  productsList: Product[] = PRODUCTLIST;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recentlyConsulted : RecentlyConsultedService,
    private productService: ProductsService,
  ) { }


  ngOnInit() {
    this.getProductById();
  }
  ngOnDestroy() {
    this.addToHistorique();
  }

  addToHistorique() {
    if(this.product) {
    
    this.recentlyConsulted.addProductToHistorique(this.product);
   }
  }
  // addToHistorique() {
  //   if(!this.product) return;

  //   const product : Product = {
      
  //       id: this.id,
    
  //       // Bien mettre une majuscule et au pluriel pour le titre de la page single-catégory
  //       category: this.category,
  //       reference: this.reference,
  //       productSize: this.productSize,
  //       price: this.price,
  //       productStatus: this.productStatus,
  //       isAvailable: this.isAvailable,
  //       description: this.description,
  //       productFit: this.productFit,
  //       composition: this.composition,
  //       washingMaintenance: this.washingMaintenance,
  //       photoOne: this.photoOne,
  //       photoTwo: this.photoTwo,
  //       photoThree: this.photoThree,
  //       photoFour: this.photoFour,
  //     }
  //     this.recentlyConsulted.addProductToHistorique(this.product);

  //   }
    
   
  

//   console.log(this.product);
// }
// addToHistorique() {
//   this.recentlyConsulted.addProductToHistorique(this.product);
//   }

   

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
