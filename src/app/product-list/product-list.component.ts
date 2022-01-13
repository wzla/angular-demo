import { Component, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = products;

  share(name: string) {
    alert(name);
  }

  onNotify(price: number) {
    alert(price);
  }
}
