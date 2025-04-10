import { Directive, Host, HostBinding, Inject, InjectionToken, Optional } from '@angular/core';

export const VALUE_SERVICE = new InjectionToken('value_service');

@Directive({ selector: '[paDisplayValue]' })
export class paDisplayVaslueDirective {
  constructor(@Inject(VALUE_SERVICE) @Host() @Optional() serviceValue: string) {
    this.elementContent = serviceValue || 'No Value';
  }

  @HostBinding('textContent')
  elementContent: string;
}
