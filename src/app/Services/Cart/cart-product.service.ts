import { Injectable } from '@angular/core';
import { ItemWithQuantity } from 'src/app/model/ItemWithQuantity';

import { ProductModel } from 'src/app/model/productModel';
import { CartProducts } from 'src/app/model/universal';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  constructor() { }
  addToCart(product: ProductModel) {
    CartProducts.cart.push(product);
  }
  removeFromCart(product: ProductModel) {
    var i = CartProducts.cart.indexOf(product);
    if (i > -1) {
      CartProducts.cart.splice(i, 1);
    }
  }
  itemWithQuantity(products: ProductModel[]): ItemWithQuantity[] {
    var itemsAndQuantity: ItemWithQuantity[] = new Array<ItemWithQuantity>();
    for (let product of products) {
      var flag = true;
      for (let item of itemsAndQuantity) {
        if (product == item.item) {
          item.quantity++;
          flag = false;
          break;
        }
      }
      if (flag) {
        var itemandQuantity = new ItemWithQuantity();
        itemandQuantity.item = product;
        itemandQuantity.quantity = 1  ;
        itemsAndQuantity.push(itemandQuantity);
      }
    }
    return itemsAndQuantity;
  }

}

