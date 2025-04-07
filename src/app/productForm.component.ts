import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'pa-productform',
  templateUrl: 'productForm.component.html',
  // styleUrls: ["productForm.component.css"],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = new Product();
  @Output('paNewProduct')
  newProductEvent = new EventEmitter<Product>();
  constructor() {}

  ngOnInit() {}

  submitForm(form: any) {
    this.newProductEvent.emit(this.newProduct);
    this.newProduct = new Product();
    form.resetForm();
  }
}
