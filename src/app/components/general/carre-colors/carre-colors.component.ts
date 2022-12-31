import { Component } from '@angular/core';

export interface Carre {
  colorOne : string;
  colorTwo : string;
  colorThree : string;

}

@Component({
  selector: 'app-carre-colors',
  templateUrl: './carre-colors.component.html',
  styleUrls: ['./carre-colors.component.css']
})
export class CarreColorsComponent {
  carre: Carre[] = [ {
    colorOne : "assets/carre-colors/carré_teinte-1.png",
    colorTwo : "assets/carre-colors/carré_teinte-2.png",
    colorThree : "assets/carre-colors/carré_teinte.png"
  }
  ]
}
