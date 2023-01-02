import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { FilArianeComponent } from './components/general/fil-ariane/fil-ariane.component';
import { ProductDescriptionComponent } from './components/single-product/product-description/product-description.component';
import { ProductPhotosComponent } from './components/single-product/product-photos/product-photos.component';
import { ProductRatingComponent } from './components/single-product/product-rating/product-rating.component';
import { ProductSizeComponent } from './components/single-product/product-size/product-size.component';
import { ProductSpecsComponent } from './components/single-product/product-specs/product-specs.component';
import { SizeGuideComponent } from './components/single-product/size-guide/size-guide.component';
import { RecentlyConsultedComponent } from './components/single-product/recently-consulted/recently-consulted.component';
import { SeasonSectionComponent } from './components/all-categories/season-section/season-section.component';
import { InstaSectionComponent } from './components/all-categories/insta-section/insta-section.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartAllProductsComponent } from './components/cart/cart-all-products/cart-all-products.component';
import { CartProductCardComponent } from './components/cart/cart-product-card/cart-product-card.component';
import { CartTotalComponent } from './components/cart/cart-total/cart-total.component';
import { CartPaymentInfosComponent } from './components/cart/cart-payment-infos/cart-payment-infos.component';
import { CartPromoCodeComponent } from './components/cart/cart-promo-code/cart-promo-code.component';
import { CartCounterComponent } from './components/cart/cart-counter/cart-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SingleProductComponent,
    FilArianeComponent,
    ProductDescriptionComponent,
    ProductPhotosComponent,
    ProductRatingComponent,
    ProductSizeComponent,
    ProductSpecsComponent,
    SizeGuideComponent,
    RecentlyConsultedComponent,
    SeasonSectionComponent,
    InstaSectionComponent,
    AllCategoriesComponent,
    HomepageComponent,
    NotFoundComponent,
    CartComponent,
    CartAllProductsComponent,
    CartProductCardComponent,
    CartTotalComponent,
    CartPaymentInfosComponent,
    CartPromoCodeComponent,
    CartCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
