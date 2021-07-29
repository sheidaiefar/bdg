import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customComponent]'
})
export class CustomComponentDirective implements OnInit, AfterViewInit {
  // @ts-ignore
  @Input() customComponent: any;
  @Input() data: any;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    if (this.customComponent) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.customComponent
      );
      const componentRef = this.viewContainerRef.createComponent(
        componentFactory
      );
      // @ts-ignore
      componentRef.instance.model = this.data;
    }
  }

  ngAfterViewInit(): void {}
}
