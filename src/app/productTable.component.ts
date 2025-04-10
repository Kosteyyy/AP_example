import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { DiscountService } from './discount.service';
import { LogService } from './log.service';
// import { PaCellColor } from './cellColor.directive';

@Component({
  selector: 'paProductTable',
  templateUrl: 'ProductTable.component.html',
  providers: [LogService]
})
export class ProductTableComponent implements OnInit {
  // @Input('model')
  // dataModel: Model | undefined;

  // discounter: DiscountService = new DiscountService();

  constructor(private dataModel: Model) { }

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

  // showTable: boolean = true;

  // @ViewChildren(PaCellColor)
  // viewChildren: QueryList<PaCellColor> | undefined;

  // ngAfterViewInit() {
  //   this.viewChildren?.changes.subscribe(() => {
  //     this.updateViewChildren();
  //   });
  //   this.updateViewChildren();
  // }

  // private updateViewChildren() {
  //   setTimeout(() => {
  //     this.viewChildren?.forEach((child, index) => {
  //       child.setColor(index % 2 ? true : false);
  //     });
  //   }, 0);
  // }

  taxRate: number = 0;
  categoryFilter: string | undefined;
  itemCount: number = 3;
}
