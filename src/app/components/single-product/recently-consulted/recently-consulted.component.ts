import { Component } from '@angular/core';
import { HistoriqueProduct, RecentlyConsultedService } from 'src/app/service/RecentlyConsulted/recently-consulted.service';

@Component({
  selector: 'app-recently-consulted',
  templateUrl: './recently-consulted.component.html',
  styleUrls: ['./recently-consulted.component.css']
})
export class RecentlyConsultedComponent {

  historique : HistoriqueProduct[] = [];

  constructor(private historiqueService : RecentlyConsultedService ) {  }

  ngOnInit() {
    this.getHistorique();
    console.log(this.historique);
    
  }

  getHistorique () {
    this.historique = this.historiqueService.getHistorique();
  }
}
