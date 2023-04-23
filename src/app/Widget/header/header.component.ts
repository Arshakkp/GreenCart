import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/Services/helper.service';
import { UserDetil } from 'src/app/model/userDetail';
import { UserModel } from 'src/app/model/userModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHome = false;
  userDetail: UserModel = UserDetil.userAccount;
  isLogged = false;;
  constructor(private helper: HelperService) { }
  ngOnInit(): void {
    this.navigateTo();
    this.checkLoggedIn();
  }
  checkLoggedIn() {
    if (this.userDetail.token.length > 0) {
      this.isLogged = true;
    }
  }
  navigateTo() {
    var toWhere: 'main/home' | 'main/cart' = 'main/cart';
    if (this.isHome) {
      toWhere = 'main/cart';
    }
    else {
      toWhere = 'main/home'
    }
    this.helper.navigateTo(toWhere);

    this.isHome = !this.isHome;
  }
}
