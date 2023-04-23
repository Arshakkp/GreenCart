import { Component, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/Services/Cart/cart-product.service';
import { HelperService } from 'src/app/Services/helper.service';
import { ItemWithQuantity } from 'src/app/model/ItemWithQuantity';
import { AddressModel } from 'src/app/model/address';

import { ProductModel } from 'src/app/model/productModel';
import { CartProducts } from 'src/app/model/universal';
import { UserDetil } from 'src/app/model/userDetail';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartProducts: ProductModel[] = CartProducts.cart;
  addressList: AddressModel[] = UserDetil.userAddressList
  selectedIndex = -1;
  isCartEmpty(): boolean {
    if (this.cartProducts.length == 0) {
      return true;
    }
    return false;
  }
  constructor(private helper: HelperService, private cartService: CartProductService) { }
  covertToItemWithQuant(): ItemWithQuantity[] {
    return this.cartService.itemWithQuantity(this.cartProducts)
  }
  calcTotalAmount(): number {
    var totalAmount = 0.0;
    for (let carProduct of this.cartProducts) {
      var amount = carProduct.rate;
      totalAmount += amount;
    }
    return totalAmount;
  }
  onSelect(index: number) {
    this.selectedIndex = index;
  }
  navigateTo() {
    this.helper.navigateTo('address');
  }
}
