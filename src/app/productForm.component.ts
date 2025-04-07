import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from './product.model';
import { Model } from './repository.model';

@Component({
  selector: 'pa-productform',
  templateUrl: 'productForm.component.html',
  // styleUrls: ["productForm.component.css"],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = new Product();
  // @Output('paNewProduct')
  // newProductEvent = new EventEmitter<Product>();
  constructor(private model: Model) {}

  ngOnInit() {}

  submitForm(form: any) {
    // this.newProductEvent.emit(this.newProduct);
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.resetForm();
  }
}
