import {
    ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { PaCellColor } from './cellColor.directive';

@Directive({
  selector: 'table',
})
export class PaCellColorSwitcher {
  @Input('paCellDarkColor')
  modelProperty: Boolean | undefined;

  constructor(private cdr: ChangeDetectorRef){}

  //   @ContentChild(PaCellColor)
  //   contentChild: PaCellColor | undefined;

  @ContentChildren(PaCellColor, { descendants: true })
  contentChildren: QueryList<PaCellColor> | undefined;

  ngOnChanges(changes: SimpleChanges) {
    this.updateContentChildren(changes['modelProperty'].currentValue);
  }

  ngAfterContentInit() {
    if (this.modelProperty != undefined) {
      this.contentChildren?.changes.subscribe(() => {
        this.updateContentChildren(this.modelProperty as Boolean);
      });
    }
  }

  private updateContentChildren(dark: Boolean) {
    if (this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
      this.cdr.detectChanges(); // Запускаем проверку изменений
    }
  }
}
