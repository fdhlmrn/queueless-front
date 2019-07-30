import { Component, OnInit } from '@angular/core';
import { Product, RestService } from '../rest.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    return this.restService
        .getProducts()
        .subscribe(
          products => this.products = products
        );
  }
}
