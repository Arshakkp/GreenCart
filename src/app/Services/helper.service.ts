import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private route:Router) { }
  navigateTo(toName:'login'|'main'|'main/cart'|'main/home'|'address'){
this.route.navigate([toName]);
  }
}
