import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  SkipSelf,
  ViewEncapsulation,
} from '@angular/core';
import { Product } from './product.model';
import { Model } from './repository.model';
import { VALUE_SERVICE } from './valueDisplay.directive';

@Component({
  selector: 'pa-productform',
  templateUrl: 'productForm.component.html',
  viewProviders: [{ provide: VALUE_SERVICE, useValue: 'Oranges' }],
  // styleUrls: ["productForm.component.css"],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = new Product();
  // @Output('paNewProduct')
  // newProductEvent = new EventEmitter<Product>();
  constructor(
    private model: Model,
    @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string
  ) {
    console.log('Service Value: ' + serviceValue);
  }

  get localServiceValue() {
    return this.serviceValue;
  }

  ngOnInit() {
  }

  submitForm(form: any) {
    // this.newProductEvent.emit(this.newProduct);
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.resetForm();
  }
}
