import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, Output, } from '@angular/core';

@Directive({ selector: '[resizeObserver]' })
export class ResizeObserverDirective implements OnDestroy {

  @Output() resized = new EventEmitter<ResizeObserverEntry>();

  private resizeObserver: ResizeObserver;

  constructor(private element: ElementRef, private zone: NgZone) {
    this.resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        this.zone.run(() => this.resized.emit(entry));
      })
    });

    this.resizeObserver.observe(element.nativeElement);
  }

  public ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }

}


