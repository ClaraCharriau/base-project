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
    RecentlyConsultedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
