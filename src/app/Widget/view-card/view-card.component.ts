import { Component, Input, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/Services/Cart/cart-product.service';
import { ItemWithQuantity } from 'src/app/model/ItemWithQuantity';
import { ProductModel } from 'src/app/model/productModel';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  @Input() product?: ProductModel;
  @Input() itemWithQuantity?: ItemWithQuantity;
  @Input() cartView: boolean = false;
  quantity = 0.0;
  constructor(private cartService: CartProductService) {
    this.assignProductsandQuantity();
  }
  ngOnInit(): void {
    this.assignProductsandQuantity();
  }

  assignProductsandQuantity() {
    if (this.cartView && this.itemWithQuantity != null) {
      this.product = this.itemWithQuantity?.item;
      this.quantity = this.itemWithQuantity?.quantity;
    }

  }
  addOrRemove() {
    if (this.cartView) {
      this.removeFromCart();
      return;
    }
    this.addToCart();
  }
  addToCart() {
    if (this.product) {
      console.log("workin")
      this.cartService.addToCart(this.product);
    }
  }
  removeFromCart() {
    if (this.product) {


      this.cartService.removeFromCart(this.product)
    }
  }
}
