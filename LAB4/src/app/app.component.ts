import { Component } from '@angular/core';
import {MotoProduct} from "./models/product";
import {products as data} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB4';
  products: MotoProduct[] = data
}
