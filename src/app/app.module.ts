import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import google map component
import { AgmCoreModule } from '@agm/core';

// import route modules
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//import page components
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

// import services
import { CartService } from './services/cart.service';
import { SliderProductsService } from './services/slider-products.service';
import { LocalStorageService } from './services/local-storage.service';
import { CartBadgeComponent } from './components/cart-badge/cart-badge.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';


// array of routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'comingsoon', component: ComingSoonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    FooterComponent,
    SubscribeComponent,
    ComingSoonComponent,
    CartBadgeComponent,
    MainSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAH8jTkd6FDPK4IPnzR__4rpL19NIgm1c'
    })
  ],
  providers: [ CartService, LocalStorageService, SliderProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
