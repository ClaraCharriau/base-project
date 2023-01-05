import { Component } from '@angular/core';
// importer ce qui suit dans app.compo.fr afin d'avoir le symbol à droite (à la française)
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base-project';
}
