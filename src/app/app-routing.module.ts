import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

const routes: Routes = [
  // Page d'accueil
  { path: '', component: HomepageComponent },

  // Toutes les catégories
  { path: 'all-categories', component: AllCategoriesComponent },

  // Page produit
  { path: 'single-product', component: SingleProductComponent },

  // Page categorie
  // { path: 'single-category', component: SingleCategoryComponent },

  { path: 'all-categories/:category', component: SingleCategoryComponent},

  // Panier
  { path: 'cart', component: CartComponent },

  // Page 404
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

