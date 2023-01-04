import { Component, Input } from '@angular/core';
import { Product } from 'src/mocks/product-list.mock';
// import { Carre } from '../../general/carre-colors/carre-colors.component';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() item!: Product[];

  ngOnInit() {
    console.log(this.item);
  }
  
  // @Input() carre!: Carre[] 

}
  

