import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { ToggleViewComponent } from './toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';

import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PaDiscountDisplayComponent } from './discount.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';
import { PaDiscountPipe } from './discount.pipe';
import { PaDiscountAmountDirective } from './discountAmount.directive';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    ProductComponent,
    AppComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    ToggleViewComponent,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe,
    PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en-US" }, DiscountService],
  bootstrap: [ProductComponent],
})
export class AppModule {}
