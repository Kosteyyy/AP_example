import {
  Directive,
  Input,
  IterableChangeRecord,
  IterableDiffer,
  IterableDiffers,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[paForOf]',
})
export class PaIteratorDirective {
  private differ: IterableDiffer<any> | undefined;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>,
    private differs: IterableDiffers
  ) {}
  @Input('paForOf')
  dataSource: any;

  ngOnInit() {
    // this.updateContent();
    this.differ = <IterableDiffer<any>>(
      this.differs.find(this.dataSource).create()
    );
  }

  ngDoCheck() {
    let changes = this.differ?.diff(this.dataSource);
    if (changes != null) {
      console.log('ngDoCheck called, changes detected');
      let arr: IterableChangeRecord<any>[] = [];
      changes.forEachAddedItem((addition) => arr.push(addition));
      console.log("🚀 ~ PaIteratorDirective ~ ngDoCheck ~ arr:", arr)
      arr.forEach((addition) => {
        if (addition.currentIndex != null) {
          this.container.createEmbeddedView(
            this.template,
            new PaIteratorContext(
              addition.item,
              addition.currentIndex,
              arr.length
            )
          );
        }
      });
    }
  }

  //   private updateContent() {
  //     this.container.clear();
  //     for (let i = 0; i < this.dataSource.length; i++) {
  //       this.container.createEmbeddedView(
  //         this.template,
  //         new PaIteratorContext(this.dataSource[i], i, this.dataSource.length) // или {$implicit: this.dataSource[i]}
  //       );
  //     }
  //   }
}

class PaIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  constructor(public $implicit: any, public index: number, total: number) {
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;

    // setInterval(() => {
    //   this.odd = !this.odd;
    //   this.even = !this.even;
    //   this.$implicit.price++;
    // }, 2000);
  }
}
