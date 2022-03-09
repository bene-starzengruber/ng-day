import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name: 'wrapFn',
        pure: true
      })
export class WrapFnPipe implements PipeTransform {

  public transform(value, wrapperFunction, ...args) {
    return wrapperFunction(value, ...args);
  }
}



