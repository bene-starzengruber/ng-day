import { AfterViewInit, Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[inViewport]' })
export class InViewportDirective implements OnDestroy, AfterViewInit {

  @Input() inViewport: HTMLElement; // dogContainer

  private observer: IntersectionObserver;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      const entry = entries[entries.length - 1];

      if (entry.isIntersecting) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.observer.disconnect();
      }
    });

    this.observer.observe(this.inViewport);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}


