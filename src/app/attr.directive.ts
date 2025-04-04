import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[pa-attr]' })
export class PaAttrDirective {
  constructor(element: ElementRef) {
    element.nativeElement.classList.add('table-success', 'fw-bold');
    console.log("🚀 ~ PaAttrDirective ~ constructor ~ element:", element)
  }
}
