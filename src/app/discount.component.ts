import { Component, Input, OnInit } from '@angular/core';
import { DiscountService } from './discount.service';

@Component({
  selector: 'paDiscountDisplay',
  template: `<div class="bg-info text-white p-2 my-2">
    The discount is {{ discounter.discount }}
  </div>`,
})
export class PaDiscountDisplayComponent implements OnInit {
  constructor(public discounter: DiscountService) {}

  ngOnInit() {}
}
