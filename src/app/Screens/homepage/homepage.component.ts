import { Component } from '@angular/core';
import { ProductModel } from 'src/app/model/productModel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  newProducts: ProductModel[] = [
    new ProductModel({ id: "1", name: "Potatoes", rate: 50.00, imageUrl: "https://thumbs.dreamstime.com/b/raw-potatoes-white-background-61790721.jpg" }),
    new ProductModel({ id: "2", name: "Tomatoes", rate: 30.00, imageUrl: "https://www.collinsdictionary.com/images/full/tomato_281240360.jpg" })
  ];

}
