import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { FilArianeComponent } from './components/general/fil-ariane/fil-ariane.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ProductDescriptionComponent } from './components/single-product/product-description/product-description.component';
import { ProductPhotosComponent } from './components/single-product/product-photos/product-photos.component';
import { ProductRatingComponent } from './components/single-product/product-rating/product-rating.component';
import { ProductSizeComponent } from './components/single-product/product-size/product-size.component';
import { ProductSpecsComponent } from './components/single-product/product-specs/product-specs.component';
import { SizeGuideComponent } from './components/single-product/size-guide/size-guide.component';
import { RecentlyConsultedComponent } from './components/single-product/recently-consulted/recently-consulted.component';
import { SortingProductsComponent } from './components/Single-category/sorting-products/sorting-products.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { ProductCardComponent } from './components/Single-category/product-card/product-card.component';
import { AllProductsComponent } from './components/Single-category/all-products/all-products.component';
import { CarreColorsComponent } from './components/general/carre-colors/carre-colors.component';
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
import { LandingSectionComponent } from './components/homepage/landing-section/landing-section.component';
import { NouveauteSectionComponent } from './components/homepage/nouveaute-section/nouveaute-section.component';
import { BestSellerSectionComponent } from './components/homepage/best-seller-section/best-seller-section.component';
import { EngagementsSectionComponent } from './components/homepage/engagements-section/engagements-section.component';
import { CarouselComponent } from './components/general/carousel/carousel.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { PaymentRecapComponent } from './components/payment/payment-recap/payment-recap.component';
import { PaymentTotalComponent } from './components/payment/payment-total/payment-total.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilArianeComponent,
    SingleProductComponent,
    ProductDescriptionComponent,
    ProductPhotosComponent,
    ProductRatingComponent,
    ProductSizeComponent,
    ProductSpecsComponent,
    SizeGuideComponent,
    RecentlyConsultedComponent,
    SortingProductsComponent,
    SingleCategoryComponent,
    ProductCardComponent,
    AllProductsComponent,
    CarreColorsComponent,
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
    CartCounterComponent,
    LandingSectionComponent,
    NouveauteSectionComponent,
    BestSellerSectionComponent,
    EngagementsSectionComponent,
    CarouselComponent,
    PaymentComponent,
    PaymentFormComponent,
    PaymentRecapComponent,
    PaymentTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
