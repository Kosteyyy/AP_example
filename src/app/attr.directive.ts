import {
  Attribute,
  Directive,
  ElementRef,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({ selector: '[pa-attr]' })
export class PaAttrDirective {
  // constructor(element: ElementRef, @Attribute("pa-attr-class") bgClass: string) {
  //   element.nativeElement.classList.add(bgClass || 'table-success', 'fw-bold');
  // }
  constructor(private element: ElementRef) {}
  @Input('pa-attr')
  bgClass: string | null = '';
  // ngOnInit() {
  //   this.element.nativeElement.classList.add(
  //     this.bgClass || 'table-success',
  //     'fw-bold'
  //   );
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log("🚀 ~ PaAttrDirective ~ ngOnChanges ~ changes:", changes)
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}
