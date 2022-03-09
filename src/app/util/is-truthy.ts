import { filter } from 'rxjs/operators';

export function isTruthy<T>() {
  return filter<T>(item => item != null);
}


