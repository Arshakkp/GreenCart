import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Screens/landing-page/landing-page.component';
import { LoginPageComponent } from './Screens/login-page/login-page.component';
import { MainPageComponent } from './Screens/main-page/main-page.component';
import { HomepageComponent } from './Screens/homepage/homepage.component';
import { CartComponent } from './Screens/cart/cart.component';
import { AddressComponent } from './Screens/address/address.component';


const routes: Routes = [{
  path: '', component: LandingPageComponent
},
{
  path: 'login', component: LoginPageComponent,
},
{
  path: 'main',
  component: MainPageComponent,
  children: [
    {
      path: 'home',
      component: HomepageComponent
    },
    {
      path: 'cart',
      component: CartComponent
    }
  ]

},
{
  path: 'address',
  component: AddressComponent
},
{
  path: '**',
  component: LandingPageComponent
}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
