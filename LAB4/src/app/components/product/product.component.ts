import {Component, Input} from '@angular/core'

import {MotoProduct} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: MotoProduct
  details = false
  share() {
    window.open("https://telegram.me/share/url?url=" + this.product.link)
  }
}
