import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { NgForm, NgModel, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'template.html',
})
export class ProductComponent {
  model: Model = new Model();
  showTable: boolean = false;
  darkColor: boolean = false;

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  submitForm() {
    this.addProduct(this.newProduct);
    this.newProduct = new Product();
    // console.log(
    //   '🚀 ~ ProductComponent ~ submitForm ~ this.newProduct:',
    //   this.newProduct,
    //   this.getProducts()
    // );
  }
}
