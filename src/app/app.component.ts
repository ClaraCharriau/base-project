import { Component } from '@angular/core';
// importer ce qui suit dans app.compo.fr afin d'avoir le symbol à droite (à la française)
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CartService } from './service/cart/cart.service';
import { RecentlyConsultedService } from './service/RecentlyConsulted/recently-consulted.service';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base-project';

  constructor(private cartService: CartService, private historiqueService : RecentlyConsultedService) {}
  

  ngOnInit() {
   this.cartService.initCart();
   this.historiqueService.getHistorique();
   
    }
}
