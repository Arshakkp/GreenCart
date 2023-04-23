import { Component } from '@angular/core';
import { HelperService } from 'src/app/Services/helper.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private helper:HelperService){}
navigateTo(toWhere:'login'|'main'){
this.helper.navigateTo(toWhere);
}
}
