import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Screens/landing-page/landing-page.component';
import { LoginPageComponent } from './Screens/login-page/login-page.component';


const routes:Routes=[{
  path:'',component:LandingPageComponent
},
{
  path:'login',component:LoginPageComponent
}]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
