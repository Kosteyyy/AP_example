import { ContentChild, Directive, Input, SimpleChanges } from '@angular/core';
import { PaCellColor } from './cellColor.directive';

@Directive({
  selector: 'table',
})
export class PaCellColorSwitcher {
  @Input('paCellDarkColor')
  modelProperty: Boolean | undefined;

  @ContentChild(PaCellColor)
  contentChild: PaCellColor | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (this.contentChild != null) {
      this.contentChild.setColor(changes['modelProperty'].currentValue);
    }
  }
}
