import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

const routes: Routes = [
  // Page d'accueil
  { path: '', component: HomepageComponent },

  // Toutes les catégories
  { path: 'all-categories', component: AllCategoriesComponent },

  // Page categorie
  { path: 'all-categories/:category', component: SingleCategoryComponent },

  // Page produit
  { path: 'products/:id', component: SingleProductComponent },

  // Panier
  { path: 'cart', component: CartComponent },

  // Formulaire de paiement
  { path: 'payment', component: PaymentComponent},

  // Confirmation de la commande
  { path: 'payment-success', component: PaymentSuccessComponent},

  // Page 404
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
