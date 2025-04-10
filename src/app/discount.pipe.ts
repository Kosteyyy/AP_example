import { Pipe } from '@angular/core';
import { DiscountService } from './discount.service';
import { LogService } from './log.service';

@Pipe({
  name: 'discount',
  pure: false,
})
export class PaDiscountPipe {
  constructor(private discount: DiscountService, private logger: LogService) {}
  transform(price: number): number {
    if(price > 100) this.logger.logInfoMessage(`Большая цена дисконтирована: ${price}`)
    return this.discount.applyDiscount(price);
  }
}
