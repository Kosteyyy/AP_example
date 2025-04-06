import { Component, Input, OnInit } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'paProductTable',
  templateUrl: 'ProductTable.component.html',
})
export class ProductTableComponent implements OnInit {
  @Input('model')
  dataModel: Model | undefined;

  constructor() {}

  ngOnInit() {}

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }

  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel?.deleteProduct(key);
  }
  
  showTable: boolean = true;
}
