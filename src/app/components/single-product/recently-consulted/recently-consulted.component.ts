import { Component } from '@angular/core';
import { RecentlyConsultedService } from 'src/app/service/RecentlyConsulted/recently-consulted.service';
import { Product } from 'src/mocks/product-list.mock';

@Component({
  selector: 'app-recently-consulted',
  templateUrl: './recently-consulted.component.html',
  styleUrls: ['./recently-consulted.component.css']
})
export class RecentlyConsultedComponent {

  historique : Product[] = [];

  
  constructor(private historiqueService : RecentlyConsultedService ) {  }

  ngOnInit() {
    this.getHistorique();
    console.log(this.historique);
    
  }

  getHistorique () {
    this.historique = this.historiqueService.getHistorique();
  }
}
