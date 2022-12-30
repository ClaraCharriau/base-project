import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

const routes: Routes = [
  // Page d'accueil
  { path: '', component: HomepageComponent },

  // Toutes les catégories
  { path: 'all-categories', component: AllCategoriesComponent },

  // Page produit
  { path: 'single-product', component: SingleProductComponent },

  // Page 404
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

