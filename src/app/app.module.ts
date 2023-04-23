import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './Screens/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './Screens/login-page/login-page.component';
import { MainPageComponent } from './Screens/main-page/main-page.component';
import { HeaderComponent } from './Widget/header/header.component';
import { ViewCardComponent } from './Widget/view-card/view-card.component';
import { HomepageComponent } from './Screens/homepage/homepage.component';
import { CartComponent } from './Screens/cart/cart.component';
import { AddressComponent } from './Screens/address/address.component';
import { AddressViewComponent } from './Widget/address-view/address-view.component';
import { SucessPageComponent } from './Screens/sucess-page/sucess-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    MainPageComponent,
    HeaderComponent,
    ViewCardComponent,
    HomepageComponent,
    CartComponent,
    AddressComponent,
    AddressViewComponent,
    SucessPageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
