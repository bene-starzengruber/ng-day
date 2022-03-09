import { map } from 'rxjs';

export function mapArray<T, R>(mapFn: (item: T, index?: number, array?: T[]) => R) {
  // map(inputArray => inputArray.map(item => mapFn(item))
  return map<T[], R[]>((inputArray: T[]) => inputArray.map((item, idx, array) => mapFn(item, idx, array)));
}
