import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Filters an array from the source observable by testing each element with a filter function
 * @param filterFn function which returns a truthy or falsy value depending on if the value should be included in the result or not.
 */
export function filterArray<T>(filterFn: (item: T, index?: number, array?: T[]) => any): OperatorFunction<T[], T[]> {
  // map(inputArray => inputArray.map(items => items.filter(item => filterFn(item)))
  return map<T[], T[]>((inputArray: T[]) => inputArray.filter((item, idx, array) => filterFn(item, idx, array)));
}
